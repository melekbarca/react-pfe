import React, { useContext, useState } from 'react'
import { TemplateComptes } from '../../Template'
import { Data } from '../../Common'
import { LangContext } from '../../Lang/Provider/Provider'
import { Button, Icon } from '../../DesignSystem'
import { SizeButton, TypeButton } from "../../DesignSystem/Types/Types"
import { useNavigate } from 'react-router-dom'
import { IUseFormResult, useEffectOnce, useForm, useUpdateEffect } from '@piximind/custom-hook'
import { IListData } from '@piximind/ds-p-23/lib/esn/Interfaces/Organisms/IOrganismTable/IOrganismTable'
import { AuthAPI } from '../../Api'
import { IAccount } from '../../Interfaces/Account/IAccount'
import { IActivity } from '../../Interfaces/Activity/IActivity'
import { IgetAllAccountsByParams } from '../../Interfaces/Account/IgetAllAccountsByParams'
import { useDispatch } from "react-redux";
import { setSelectedId } from "../../Redux/Reducers/UpdateReducer/UpdateReducer";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Compte() {
    const dispatch = useDispatch();
    const lang = useContext(LangContext)
    let sortfield = ""
    const navigate = useNavigate();
    const [isLoaded, setisLoaded] = useState(true)
    const [page, setPage] = useState<number>(1)
    const [numberOfPage, setNumberOfPage] = useState<number>(1)
    const [dataTable, setDataTable] = useState<IListData>([])
    const [type, setType] = useState<string[]>(["data1"])
    const [create, setCreate] = useState<string[]>(["0"])
    const [action, setAction] = useState<string[]>(["Actions"])
    const [search, setSearch] = useState<string>("")
    const [sortOrder, setSortOrder] = useState<string>("asc")
    const [sortField, setSortField] = useState<string>("")
    const changeCol = () => {
        return <Icon
            size={30}
            onClick={() => { }}
            icon="adjustments"
        />
    }

    const { state: form, onChange }: IUseFormResult = useForm({
        data: [
            {
                key: "search",
                value: "",
                isRealTimeValidation: true,
            },
        ]
    })

    const headers = Data.getHeaderCompany(lang, changeCol)

    const selectOptionType = [
        { label: lang.update, value: "update" },
        { label: lang.toArchive, value: "archive" },
        { label: lang.delete, value: "delete" }

    ]

    const selectOptionCreate = [
        { label: lang.createCompany, value: "0" },
    ]

    const getAllAccountsByParamsData: IgetAllAccountsByParams = {
        page: page,
        perPage: 5,
        sortField: sortField,
        sortOrder: sortOrder,
        search: String(form.search.value),
    }

    useEffectOnce(() => {
        getAllAccountByParams();
    });

    useUpdateEffect(() => {
        getAllAccountByParams();
    }, [getAllAccountsByParamsData.search, getAllAccountsByParamsData.sortOrder, getAllAccountsByParamsData.sortField, getAllAccountsByParamsData.page]);



    const updateAccountsSort = () => {
        if (getAllAccountsByParamsData.sortOrder == "asc") {
            setSortOrder("desc")
        } else {
            setSortOrder("asc")
        }
    }

    const getAllAccountByParams = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllAccountByParams(getAllAccountsByParamsData)
        setisLoaded(false)
        const total = response.data.accounts.total
        setNumberOfPage(Number(Math.ceil(total / getAllAccountsByParamsData.perPage)))
        const accountsList: IAccount[] = [];
        for (let i = 0; i < response.data.accounts.data.length; i++) {
            const newAccount: IAccount = {
                statiqueField: {
                    id: response.data.accounts.data[i].id,
                    user: response.data.accounts.data[i].user.name,
                    language: response.data.accounts.data[i].language.name,
                    name: response.data.accounts.data[i].name,
                    country: response.data.accounts.data[i].country,
                    city: response.data.accounts.data[i].city,
                    industry: response.data.accounts.data[i].industry.name,
                    website: response.data.accounts.data[i].website,
                    email: response.data.accounts.data[i].email,
                    linkedin: response.data.accounts.data[i].linkedin,
                    phone: response.data.accounts.data[i].phone,
                    subsidiary: response.data.accounts.data[i].subsidiary.name,
                    address: response.data.accounts.data[i].address,
                    postalcode: response.data.accounts.data[i].postalcode,
                    activities: response.data?.accounts?.data[i].activities?.map((item: IActivity) => item.name.toString())
                },
                customFields: []
            };
            accountsList.push(newAccount);
            const dataTable = accountsList.map((account: IAccount) => {
                return {
                    id: account.statiqueField.id,
                    accountManager: account.statiqueField.user,
                    language: account.statiqueField.language,
                    name: account.statiqueField.name,
                    country: account.statiqueField.country,
                    city: account.statiqueField.city,
                    industry: account.statiqueField.industry,
                    website: account.statiqueField.website,
                    email: account.statiqueField.email,
                    linkedin: account.statiqueField.linkedin,
                    phone: account.statiqueField.phone,
                    subsidiary: account.statiqueField.subsidiary,
                    address: account.statiqueField.address,
                    postalcode: account.statiqueField.postalcode,
                    activities: account.statiqueField.activities
                };
            });
            setDataTable(dataTable)
        }
    }

    const deleteAccount = (e: any, index: any) => {
        confirmAlert({
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-delete'>
                        <div className="ds-m-30">
                            <h5> {lang.deleteAccount} </h5>
                            <p>{lang.doYouWantToDeleteAccount}</p>
                            <div className="ds-flex ds-center">
                                <Button
                                    className="btnAlert"
                                    text={lang.cancel}
                                    type={TypeButton.secondary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        onClose();
                                        navigate("/comptes")
                                    }}
                                />
                                <Button
                                    className="btnAlert"
                                    text={lang.delete}
                                    type={TypeButton.primary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        const auth = new AuthAPI()
                                        auth.deleteAccount(Number(dataTable[index].id))
                                        getAllAccountByParams()
                                        if (numberOfPage === numberOfPage - 1) { setPage(page - 1) }
                                        onClose();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    const archiveAccount = (e: any, index: any) => {
        confirmAlert({
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-delete'>
                        <div className="ds-m-30">
                            <h5> {lang.archiveAccount} </h5>
                            <p>{lang.doYouWantToArchiveAccount}</p>
                            <div className="ds-flex ds-center">
                                <Button
                                    className="btnAlert"
                                    text={lang.cancel}
                                    type={TypeButton.secondary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        onClose();
                                        navigate("/comptes")
                                    }}
                                />
                                <Button
                                    className="btnAlert"
                                    text={lang.toArchive}
                                    type={TypeButton.primary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        const auth = new AuthAPI()
                                        auth.archiveAccount(Number(dataTable[index].id))
                                        getAllAccountByParams()
                                        onClose();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    const onUpdate = (e: any, index: any) => {
        let id = dataTable[index].id
        dispatch(
            setSelectedId({
                selectedId: id
            })
        )
        navigate('/account/updateAccount')

    }

    const onSort = (e: any) => {
        if (e.key === "industry") {
            sortfield = "industries.name"
        }
        else if (e.key === "subsidiary") {
            sortfield = "subsidiaries.name"
        }
        else if (e.key === "activities") {
            sortfield = "activities.name"
        }
        else if (e.key === "user") {
            sortfield = "users.name"
        }
        else if (e.key === "language") {
            sortfield = "languages.name"
        }
        else {
            sortfield = e.key
        }
        setSortField(sortfield)
        updateAccountsSort()
    }

    const onPaginate = (e: number) => {
        setPage(e)
    }


    const onChangeSelect = (e: string[], type: string) => {
        switch (type) {
            case "type":
                setType(e)
                break;
            case "action":
                setAction(e)
                break;
            case "create":
                setCreate(e)
                e[0] === "0" && navigate('/compte/addCompte')
                break;
            default:
                break;
        }
    }

    return (
        <div className='ds-w-100'>
            <TemplateComptes
                onChange={onChange}
                form={form}
                selectValueType={type}
                selectOptionType={selectOptionType}
                onChangeSelect={onChangeSelect}
                querysearch={search}
                selectOptionCreate={selectOptionCreate}
                selectValueCreate={create}
                selectOptionAction={selectOptionType}
                selectValueAction={action}
                headers={headers}
                dataTable={dataTable}
                updateAccountsSort={updateAccountsSort}
                setSortField={setSortField}
                onSort={onSort}
                onDelete={deleteAccount}
                onUpdate={onUpdate}
                onArchive={archiveAccount}
                onPaginate={onPaginate}
                page={page}
                numberOfPage={numberOfPage}
                isLoaded={isLoaded}
            />
        </div>
    )
}