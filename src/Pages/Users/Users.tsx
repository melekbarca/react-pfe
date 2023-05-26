import { useContext, useState } from 'react'
import { Data } from '../../Common'
import { LangContext } from '../../Lang/Provider/Provider'
import { Checkbox, Icon } from '../../DesignSystem'
import { useNavigate } from 'react-router-dom'
import { IUseFormResult, useEffectOnce, useForm, useUpdateEffect } from '@piximind/custom-hook'
import { AuthAPI } from '../../Api'
import { IUser } from '../../Interfaces/User/IUser'
import { TypeCheckbox } from '@piximind/ds-p-23'
import { IgetAllUserByParams } from '../../Interfaces/User/IgetAllUserByParams'
import { IListData } from '@piximind/ds-p-23/lib/esn/Interfaces/Organisms/IOrganismTable/IOrganismTable'
import TemplateUsers from '../../Template/Users/Users'

export default function Users() {
    const lang = useContext(LangContext)
    const navigate = useNavigate();
    const [isLoaded, setisLoaded] = useState(true)
    const [dataTable, setDataTable] = useState<IListData>([])
    const [type, setType] = useState<string[]>(["data1"])
    const [create, setCreate] = useState<string[]>(["0"])
    const [action, setAction] = useState<string[]>(["Actions"])
    const [sortOrder, setSortOrder] = useState<string>("asc")
    const [sortField, setSortField] = useState<string>("")
    const [page, setPage] = useState<number>(1)
    const [numberOfPage, setNumberOfPage] = useState<number>(1)
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

    const headers = Data.getHeaderUser(lang, changeCol)
    const selectOptionType = [
        { label: "data1", value: "data1" },
        { label: "data2", value: "data2" }
    ]
    const selectOptionCreate = [
        { label: lang.createUser, value: "0" },
    ]
    const getAllUserByParamsData: IgetAllUserByParams = {
        page: page,
        perPage: 5,
        sortField: sortField,
        sortOrder: sortOrder,
        search: String(form.search.value),
    }
    useEffectOnce(() => {
        getAllUserByParams();
    });

    useUpdateEffect(() => {
        getAllUserByParams();
    }, [getAllUserByParamsData.search, getAllUserByParamsData.sortOrder, getAllUserByParamsData.sortField, getAllUserByParamsData.page]);

    const updateUserStatus = (id: number, status: boolean) => {
        activateDesactivateUserAccount(id)
    }

    const updateUsersSort = () => {
        if (getAllUserByParamsData.sortOrder == "asc") {
            setSortOrder("desc")
        } else {
            setSortOrder("asc")
        }
    }


    const getAllUserByParams = async () => {
        const auth = new AuthAPI()
        const response = await auth.getAllUserByParams(getAllUserByParamsData)
        setisLoaded(false)
        const total = response.data.users.total
        setNumberOfPage(Number(Math.ceil(total / getAllUserByParamsData.perPage)))
        const usersList: IUser[] = [];
        for (let i = 0; i < response.data.users.data.length; i++) {
            const newUser: IUser = {
                id: response.data.users.data[i].id,
                identifier: response.data.users.data[i].identifier,
                image: response.data.users.data[i].image,
                name: response.data.users.data[i].name,
                email: response.data.users.data[i].email,
                password: response.data.users.data[i].password,
                roleId: response.data.users.data[i].roleId,
                role: response.data.users.data[i].roles.name,
                status: <Checkbox
                    type={TypeCheckbox.switch}
                    checked={response.data.users.data[i].status !== 0}
                    onClick={() => {
                        updateUserStatus(Number(response.data.users.data[i].id), response.data.users.data[i].status !== 0)
                    }}
                />,
                access: (response.data.users.data[i].access === 1 ? "Autorisé" : "Non autorisé"),
                lastConnexion: response.data.users.data[i].lastConnexion,
                created_at: response.data.users.data[i].created_at,
                updated_at: response.data.users.data[i].created_at,
            };
            usersList.push(newUser);
            const dataTable = usersList.map((user: IUser) => {
                return {
                    id: user.id,
                    name: user.name,
                    image: user.image,
                    identifier: user.identifier,
                    email: user.email,
                    access: user.access,
                    role: user.role,
                    created_at: user.created_at,
                    lastConnexion: user.lastConnexion,
                    status: user.status,
                };
            });
            setDataTable(dataTable)
        }
    }

    const activateDesactivateUserAccount = async (id: any) => {
        const auth = new AuthAPI()
        const response = await auth.activateDesactivateUserAccount(id)
        if (response.status === 200) {
            getAllUserByParams()
        }
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
                e[0] === "0" && navigate('/users/addUser')
                break;
            default:
                break;
        }
    }
    return (
        <div className='ds-w-100'>
            <TemplateUsers
                onChange={onChange}
                form={form}
                selectValueType={type}
                selectOptionType={selectOptionType}
                onChangeSelect={onChangeSelect}
                selectOptionCreate={selectOptionCreate}
                selectValueCreate={create}
                selectOptionAction={selectOptionType}
                selectValueAction={action}
                headers={headers}
                dataTable={dataTable}
                updateUsersSort={updateUsersSort}
                setSortField={setSortField}
                setPage={setPage}
                page={page}
                numberOfPage={numberOfPage}
                isLoaded={isLoaded}
            />
        </div>
    )
}








