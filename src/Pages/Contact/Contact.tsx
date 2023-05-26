import React, { useContext, useState } from 'react'
import { Data } from '../../Common'
import { LangContext } from '../../Lang/Provider/Provider'
import { Button, Icon } from '../../DesignSystem'
import { useNavigate } from 'react-router-dom'
import TemplateContacts from '../../Template/Contacts/Contacts'
import { IgetAllContactsByParams } from '../../Interfaces/Contact/IgetAllContactsByParams'
import { IUseFormResult, useEffectOnce, useForm, useUpdateEffect } from '@piximind/custom-hook'
import { IListData } from '@piximind/ds-p-23/lib/esn/Interfaces/Organisms/IOrganismTable/IOrganismTable'
import { AuthAPI } from '../../Api'
import { IContact } from '../../Interfaces/Contact/IContact'
import { confirmAlert } from 'react-confirm-alert'
import { SizeButton, TypeButton } from '@piximind/ds-p-23'

export default function Contact() {
    const lang = useContext(LangContext)
    const navigate = useNavigate();
    let sortfield = ""
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

    const headers = Data.getHeaderContact(lang, changeCol)

    const selectOptionType = [
        { label: "data1", value: "data1" },
        { label: "data2", value: "data2" }
    ]

    const selectOptionCreate = [
        { label: lang.createContact, value: "0" },
    ]

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
                e[0] === "0" && navigate('/contacts/addContact')
                break;
            default:
                break;
        }
    }
    const handleChangeSearch = (e: any) => {
        setSearch(e.target.value)
    }

    const getAllContactsByParamsData: IgetAllContactsByParams = {
        page: page,
        perPage: 5,
        sortField: sortField,
        sortOrder: sortOrder,
        search: String(form.search.value),
    }

    useEffectOnce(() => {
        getAllContactByParams();
    });

    useUpdateEffect(() => {
        getAllContactByParams();
    }, [getAllContactsByParamsData.search, getAllContactsByParamsData.sortOrder, getAllContactsByParamsData.sortField, getAllContactsByParamsData.page]);



    const updateContactsSort = () => {
        if (getAllContactsByParamsData.sortOrder == "asc") {
            setSortOrder("desc")
        } else {
            setSortOrder("asc")
        }
    }

    const getAllContactByParams = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllContactByParams(getAllContactsByParamsData)
        setisLoaded(false)
        const total = response.data.contacts.total
        setNumberOfPage(Number(Math.ceil(total / getAllContactsByParamsData.perPage)))
        const contactsList: IContact[] = [];
        for (let i = 0; i < response.data.contacts.data.length; i++) {
            const newContact: IContact = {
                statiqueField: {
                    id: response.data.contacts.data[i].id,
                    user: response.data.contacts.data[i].user.name,
                    language: response.data.contacts.data[i].language.name,
                    fullName: response.data.contacts.data[i].fullName,
                    email: response.data.contacts.data[i].email,
                    phone: response.data.contacts.data[i].phone,
                    linkedin: response.data.contacts.data[i].linkedin,
                    account: response.data.contacts.data[i].account.name,
                    position: response.data.contacts.data[i].position,
                    address: response.data.contacts.data[i].address,
                    country: response.data.contacts.data[i].country,
                    city: response.data.contacts.data[i].city,
                    postalcode: response.data.contacts.data[i].postalcode,
                },
                customFields: []
            };

            contactsList.push(newContact);
            const dataTable = contactsList.map((contact: IContact) => {
                return {
                    id: contact.statiqueField.id,
                    contactManager: contact.statiqueField.user,
                    language: contact.statiqueField.language,
                    fullName: contact.statiqueField.fullName,
                    email: contact.statiqueField.email,
                    phone: contact.statiqueField.phone,
                    linkedin: contact.statiqueField.linkedin,
                    account: contact.statiqueField.account,
                    position: contact.statiqueField.position,
                    address: contact.statiqueField.address,
                    country: contact.statiqueField.country,
                    city: contact.statiqueField.city,
                    postalcode: contact.statiqueField.postalcode,
                };
            });
            setDataTable(dataTable)
        }
    }

    const deleteContact = (e: any, index: any) => {
        confirmAlert({
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-delete'>
                        <div className="ds-m-30">
                            <h5> {lang.deleteContact} </h5>
                            <p>{lang.doYouWantToDeleteContact}</p>
                            <div className="ds-flex ds-center">
                                <Button
                                    className="btnAlert"
                                    text={lang.cancel}
                                    type={TypeButton.secondary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        onClose();
                                        navigate("/contacts")
                                    }}
                                />
                                <Button
                                    className="btnAlert"
                                    text={lang.delete}
                                    type={TypeButton.primary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        const auth = new AuthAPI()
                                        auth.deleteContact(Number(dataTable[index].id))
                                        getAllContactByParams()
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

    const archiveContact = (e: any, index: any) => {
        confirmAlert({
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-delete'>
                        <div className="ds-m-30">
                            <h5> {lang.archiveContact} </h5>
                            <p>{lang.doYouWantToArchiveContact}</p>
                            <div className="ds-flex ds-center">
                                <Button
                                    className="btnAlert"
                                    text={lang.cancel}
                                    type={TypeButton.secondary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        onClose();
                                        navigate("/contacts")
                                    }}
                                />
                                <Button
                                    className="btnAlert"
                                    text={lang.toArchive}
                                    type={TypeButton.primary}
                                    size={SizeButton.small}
                                    onClick={() => {
                                        const auth = new AuthAPI()
                                        auth.archiveContact(Number(dataTable[index].id))
                                        getAllContactByParams()
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

    const onSort = (e: any) => {

        if (e.key === "account") {
            sortfield = "account.name"
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
        updateContactsSort()
    }

    const onPaginate = (e: number) => {
        setPage(e)
    }


    return (
        <div className='ds-w-100'>
            <TemplateContacts
                onChange={onChange}
                form={form}
                selectValueType={type}
                selectOptionType={selectOptionType}
                onChangeSelect={onChangeSelect}
                querysearch={search}
                handleChangeSearch={handleChangeSearch}
                selectOptionCreate={selectOptionCreate}
                selectValueCreate={create}
                selectOptionAction={selectOptionType}
                selectValueAction={action}
                headers={headers}
                dataTable={dataTable}
                updateContactsSort={updateContactsSort}
                setSortField={setSortField}
                onSort={onSort}
                onArchive={archiveContact}
                onDelete={deleteContact}
                onPaginate={onPaginate}
                page={page}
                numberOfPage={numberOfPage}
                isLoaded={isLoaded}
            />
        </div>
    )
}