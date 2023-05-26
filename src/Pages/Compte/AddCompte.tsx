import React, { useContext, useEffect, useState } from 'react'
import { TemplateCreate } from '../../Template';
import { ESizeInput, Icon, Input } from '@piximind/ds-p-23';
import { LangContext } from '../../Lang/Provider/Provider';
import { IUseFormResult } from '../../CustomHooks/Interfaces/Interfaces'
import { EListFunction } from '../../CustomHooks/Types/Types'
import { useForm, useUpdateEffect } from '../../CustomHooks'
import { AuthAPI } from "../../Api"
import GeneralInformationTemplate from '../../Template/CompteTemplate/GeneralInformationTemplate';
import AddressInformationTemplate from '../../Template/CompteTemplate/AddressInformationTemplate';
import { IIndustry } from '../../Interfaces/Industry/IIndustry';
import { ISubsidiary } from '../../Interfaces/Subsidiary/ISubsidiary';
import { IActivity } from '../../Interfaces/Activity/IActivity';
import { ICountry } from '../../Interfaces/Country/ICountry';
import { ICity } from '../../Interfaces/City/ICity';
import { IUserIdName } from '../../Interfaces/UserIdName/IUserIdName';
import { useNavigate } from 'react-router-dom';
import { IAddAccount } from '../../Interfaces/Account/IAddAccount';
import { ILanguage } from '../../Interfaces/Language/ILanguage';
import { store } from '../../Redux/Store/Store';
import { openModal } from '../../Redux/Reducers/ModalReducer/ModalReducer';
import { confirmAlert } from "react-confirm-alert"

export default function AddCompte() {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    const [currentInfo, setCurrentInfo] = useState<number>(0)
    const [sectors, setSectors] = useState<IIndustry[]>([]);
    const [subsidiaries, setSubsidiaries] = useState<ISubsidiary[]>([]);
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
    const [cities, setCities] = useState<ICity[]>([]);
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [users, setUsers] = useState<IUserIdName[]>([]);
    const [file, setFile] = useState<any>();
    const tabList: string[] = [lang.generalInformation, lang.addressInformation];
    const tabName: string = lang.createCompany;
    const condSaveNew: string = "add";

    const addFieldsCancel = () => {
        navigate("/comptes")
    }

    const { state: form, onChange }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "accountManager",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "name",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
            },
            {
                key: "sector",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "activities",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "subsidiary",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "website",
                value: "",
                isRealTimeValidation: true,
            },
            {
                key: "email",
                value: "",
                rules: [
                    {
                        function: EListFunction.isMail,
                        messageError: lang.invalidMailMessage,
                        priority: 10
                    }
                ],
                isRealTimeValidation: true,
            },
            {
                key: "phone",
                value: "",
                isRealTimeValidation: true,
            },

            {
                key: "linkedin",
                value: "",
                isRealTimeValidation: true,
            },
            {
                key: "address",
                value: "",
                isRealTimeValidation: true,
            },
            {
                key: "country",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "postalCode",
                value: "",
                isRealTimeValidation: true,
            },
            {
                key: "city",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "language",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },

        ]
    })
    useEffect(() => {
        getIndustries()
        getSubsidiaries()
        getActivities()
        getCountries()
        getAllUserIdName()
        getLanguages()
    }, []);

    useUpdateEffect(() => {
        if (selectedCountry[0]) {
            getCities();
        }
    }, [selectedCountry[0]])

    const getIndustries = async () => {
        const auth = new AuthAPI()
        const response = await auth.getIndustries()
        const myData: IIndustry[] = [];
        for (let i = 0; i < response.data.industries.length; i++) {
            const item = response.data.industries[i]
            const newSector: IIndustry = {
                id: item.id,
                name: item.name,
            };
            myData.push(newSector);
            setSectors(myData)
        }
    }

    const getSubsidiaries = async () => {
        const auth = new AuthAPI()
        const response = await auth.getSubsidiaries()
        const myData: ISubsidiary[] = [];
        for (let i = 0; i < response.data.subsidiaries.length; i++) {
            const item = response.data.subsidiaries[i]
            const newSubsidiary: ISubsidiary = {
                id: item.id,
                name: item.name,
            };
            myData.push(newSubsidiary);
            setSubsidiaries(myData)
        }
    }

    const getActivities = async () => {
        const auth = new AuthAPI()
        const response = await auth.getActivities()
        const myData: IActivity[] = [];
        for (let i = 0; i < response.data.activities.length; i++) {
            const item = response.data.activities[i]
            const newActivity: IActivity = {
                id: item.id,
                name: item.name,
            };
            myData.push(newActivity);
            setActivities(myData)
        }
    }

    const getCountries = async () => {
        const auth = new AuthAPI()
        const response = await auth.getCountries()
        const myData: ICountry[] = [];
        for (let i = 0; i < response.data.length; i++) {
            const newCountry: ICountry = {
                id: i,
                name: response.data[i],
            };
            myData.push(newCountry);
            setCountries(myData)
        }
    }

    const getCities = async () => {
        const auth = new AuthAPI()
        const response = await auth.getCities(selectedCountry[0])
        const myData: ICity[] = [];
        for (let i = 0; i < response.data.length; i++) {
            const newCity: ICity = {
                id: i,
                name: response.data[i],
            };
            myData.push(newCity);
            setCities(myData)
        }
    }

    const getLanguages = async () => {
        const auth = new AuthAPI()
        const response = await auth.getLanguages()
        const myData: ILanguage[] = [];
        for (let i = 0; i < response.data.languages.length; i++) {
            const item = response.data.languages[i]
            const newLanguage: ILanguage = {
                id: item.id,
                name: item.name,
            };
            myData.push(newLanguage);
            setLanguages(myData)
        }
    }

    const getAllUserIdName = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllUserIdName()
        const myData: IUserIdName[] = [];
        for (let i = 0; i < response.data.users.length; i++) {
            const item = response.data.users[i]
            const newUser: IUserIdName = {
                id: item.id,
                name: item.name,
            };
            myData.push(newUser);
            setUsers(myData)
        }
    }

    const addAccountData: IAddAccount = {
        statiqueField: {
            userId: Number(form.accountManager.value),
            languageId: Number(form.language.value),
            name: String(form.name.value),
            country: selectedCountry[0],
            city: String(form.city.value),
            industryId: Number(form.sector.value),
            website: String(form.website.value),
            email: String(form.email.value),
            linkedin: String(form.linkedin.value),
            phone: String(form.phone.value),
            subsidiaryId: Number(form.subsidiary.value),
            address: String(form.address.value),
            postalcode: String(form.postalCode.value),
            activities: selectedActivities
        },
        customFields: []

    }

    const addAccount = async () => {
        let formData = new FormData();
        formData.append("image", file)
        formData.append("statiqueField", JSON.stringify(addAccountData.statiqueField))
        formData.set("custumFields", JSON.stringify(addAccountData.customFields))
        const auth = new AuthAPI();
        const response = await auth.addAccount(formData);
        showAlert()
        navigate("/comptes");
    };

    const addAccountNew = async () => {
        let formData = new FormData();
        formData.append("image", file)
        formData.append("statiqueField", JSON.stringify(addAccountData.statiqueField))
        formData.set("custumFields", JSON.stringify(addAccountData.customFields))
        const auth = new AuthAPI()
        const response = await auth.addAccount(formData)
        showAlert()
        window.location.reload()
    }

    const handlePlusIconClick = () => {
        store.dispatch(
            openModal({
                name: "formModalRef",
                data: {
                    title: lang.addNewField,
                    submitText: lang.validate,
                    cancelText: lang.cancel,
                }
            })
        )
    }

    const showAlert = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <div className="iconClose">
                            <Icon
                                icon="x1"
                                onClick={() => {
                                    onClose();
                                }}
                                size="20px"
                            />
                        </div>
                        <div className="iconCheck">
                            <Icon
                                icon="check"
                                size="36px"
                            />
                        </div>
                        <p><b>{lang.alertAddAccount}</b></p>
                    </div>
                );
            }
        });
    }

    const onChangeInfoAction = (index: number) => {
        switch (currentInfo) {
            case 0:
                return (
                    <GeneralInformationTemplate
                        onChange={onChange}
                        form={form}
                        sectors={sectors}
                        subsidiaries={subsidiaries}
                        activities={activities}
                        users={users}
                        languages={languages}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        selectedActivities={selectedActivities}
                        setSelectedActivities={setSelectedActivities}
                        file={file}
                        setFile={setFile}
                        onPlusIconClick={handlePlusIconClick}
                    />
                )
            case 1:
                return (
                    <AddressInformationTemplate
                        onChange={onChange}
                        form={form}
                        countries={countries}
                        cities={cities}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        selectedActivities={selectedActivities}
                        setSelectedActivities={setSelectedActivities}
                        file={file}
                        setFile={setFile}
                    />
                )
        }

    }
    return (
        <div className='ds-h-100 ds-m-40 add-company-border'>
            <TemplateCreate
                condSaveNew={condSaveNew}
                currentInfo={currentInfo}
                setCurrentInfo={setCurrentInfo}
                onChangeInfoAction={onChangeInfoAction}
                tabList={tabList}
                tabName={tabName}
                addFieldsCancel={addFieldsCancel}
                addFieldsSave={addAccount}
                addFieldsSaveNew={addAccountNew}
            />

        </div>
    )
}
