import React, { useContext, useEffect, useState } from 'react'
import { TemplateCreate } from '../../Template';
import { ESizeInput, Icon, Input } from '@piximind/ds-p-23';
import { LangContext } from '../../Lang/Provider/Provider';
import { CommonFunction } from '../../Common';
import { IUseFormResult } from '../../CustomHooks/Interfaces/Interfaces'
import { EListFunction } from '../../CustomHooks/Types/Types'
import { useForm, useUpdateEffect } from '../../CustomHooks'
import GeneralInformationTemplate from '../../Template/ContactTemplate/GeneralInformationTemplate';
import AddressInformationTemplate from '../../Template/ContactTemplate/AddressInformationTemplate';
import { ILanguage } from '../../Interfaces/Language/ILanguage';
import { IUserIdName } from '../../Interfaces/UserIdName/IUserIdName';
import { AuthAPI } from '../../Api';
import { IAccountIdName } from '../../Interfaces/Account/IAccountIdName';
import { ICountry } from '../../Interfaces/Country/ICountry';
import { ICity } from '../../Interfaces/City/ICity';
import { store } from '../../Redux/Store/Store';
import { openModal } from '../../Redux/Reducers/ModalReducer/ModalReducer';
import { IAddContact } from '../../Interfaces/Contact/IAddContact';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

export default function AddContact() {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    const [currentInfo, setCurrentInfo] = useState<number>(0)
    const tabList: string[] = [lang.generalInformation, lang.addressInformation];
    const tabName: string = lang.createContact;
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
    const [cities, setCities] = useState<ICity[]>([]);
    const [file, setFile] = useState<any>();
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [users, setUsers] = useState<IUserIdName[]>([]);
    const [accounts, setAccounts] = useState<IAccountIdName[]>([]);
    const condSaveNew: string = "add";

    const addFieldsCancel = () => {
        navigate("/contacts")
    }

    const { state: form, onChange }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "contactManager",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "fullName",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
            },
            {
                key: "account",
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "position",
                value: "",
                isRealTimeValidation: true,
            },
            {
                key: "email",
                value: "",
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
                key: "postalcode",
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
        getAllUserIdName()
        getLanguages()
        getAllAccountIdName()
        getCountries()
    }, []);

    useUpdateEffect(() => {
        if (selectedCountry[0]) {
            getCities();
        }
    }, [selectedCountry[0]])

    const getLanguages = async () => {
        const auth = new AuthAPI()
        const response = await auth.getLanguages()
        setLanguages(response.data.languages)
    }

    const getAllUserIdName = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllUserIdName()
        setUsers(response.data.users)
    }

    const getAllAccountIdName = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllAccountIdName()
        setAccounts(response.data.accounts)
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

    const addContactData: IAddContact = {
        statiqueField: {
            userId: Number(form.contactManager.value),
            languageId: Number(form.language.value),
            fullName: String(form.fullName.value),
            country: selectedCountry[0],
            city: String(form.city.value),
            email: String(form.email.value),
            linkedin: String(form.linkedin.value),
            phone: String(form.phone.value),
            address: String(form.address.value),
            postalcode: String(form.postalcode.value),
            position: String(form.position.value),
            accountId: Number(form.account.value)
        },
        customFields: []

    }

    const addContact = async () => {
        let formData = new FormData();
        formData.append("image", file)
        formData.append("statiqueField", JSON.stringify(addContactData.statiqueField))
        formData.set("custumFields", JSON.stringify(addContactData.customFields))
        const auth = new AuthAPI();
        const response = await auth.addContact(formData);
        showAlert()
        navigate("/contacts");
    };

    const addContactNew = async () => {
        let formData = new FormData();
        formData.append("image", file)
        formData.append("statiqueField", JSON.stringify(addContactData.statiqueField))
        formData.set("custumFields", JSON.stringify(addContactData.customFields))
        const auth = new AuthAPI()
        const response = await auth.addContact(formData)
        showAlert()
        window.location.reload()
    }

    const onChangeFile = (file: any) => {
        setFile(file[0])
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
                        <p><b>{lang.alertAddContact}</b></p>
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
                        users={users}
                        languages={languages}
                        accounts={accounts}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        onPlusIconClick={handlePlusIconClick}
                        onChangeFile={onChangeFile}
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
                addFieldsSave={addContact}
                addFieldsSaveNew={addContactNew}

            />

        </div>
    )
}
