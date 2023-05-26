import { useForm } from '../../CustomHooks'
import { IUseFormResult } from '../../CustomHooks/Interfaces/Interfaces'
import { AuthAPI } from "../../Api"
import { useState, useContext, useEffect, useRef } from 'react'
import { LangContext } from "../../Lang/Provider/Provider"
import { EListFunction } from '../../CustomHooks/Types/Types'
import { IRole } from '../../Interfaces/Role/IRole'
import { IUpdateUser } from '../../Interfaces/User/IUpdateUser'
import { useNavigate } from 'react-router-dom'
import PersonalInformationTemplate from '../../Template/UsersTemplate/personalInformationTemplate';
import TemplateUpdate from '../../Template/TemplateUpdate/TemplateUpdate'
export default function UpdateUser() {
    const lang = useContext(LangContext)
    const tabList: string[] = [lang.personalInformation, lang.authentication, lang.securityAndAuthorization];
    const tabName: string = lang.updateProfile;
    const [currentInfo, setCurrentInfo] = useState<number>(0);
    const [roles, setRoles] = useState<IRole[]>([]);
    const [user, setUser] = useState<IUpdateUser>();
    const [file, setFile] = useState<any>();
    const navigate = useNavigate()
    const isInitialMount = useRef(true);
    const addFieldsCancel = () => {
        navigate("/users");
    }
    const { state: form, onChange, onUpdateData }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "identifier",
                value: user ? String(user?.identifier) : "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
            },
            {
                key: "name",
                value: String(user?.name),
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
            },
            {
                key: "email",
                value: String(user?.email),
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                },
                {
                    function: EListFunction.isMail,
                    messageError: lang.invalidMailMessage,
                    priority: 10
                }],
            },
            {
                key: "role",
                value: String([roles.find((item: any) => item.value === user?.roleId.toString())?.id]),
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
        getRoles()
        showUser()
    }, []);
    const getRoles = async () => {
        const auth = new AuthAPI()
        const response = await auth.getRoles()
        const myData: IRole[] = [];
        for (let i = 0; i < response.data.length; i++) {
            const newRole: IRole = {
                id: response.data[i].id,
                name: response.data[i].name,
            };
            myData.push(newRole);
            setRoles(myData);
        }
    }
    const updateUserData: IUpdateUser = {
        identifier: String(form.identifier.value),
        name: String(form.name.value),
        email: String(form.email.value),
        roleId: 1,
    }
    const updateUser = async () => {
        const auth = new AuthAPI()
        const response = await auth.updateUser(updateUserData)
        navigate("/users")
    }
    const showUser = async () => {
        const auth = new AuthAPI()
        const response = await auth.showUser()
        const userdata: IUpdateUser = {
            identifier: response.data.identifier,
            name: response.data.name,
            email: response.data.email,
            roleId: response.data.roleId,
        };
        setUser(userdata)
    }

    const onChangeInfoAction = (index: number) => {
        switch (currentInfo) {
            case 0:
                return (
                    <PersonalInformationTemplate
                        onChange={onChange}
                        form={form}
                        roles={roles}
                        file={file}
                        setFile={setFile} />
                )
            default:
                return <></>
        }

    }
    return (
        <div className='ds-h-100 ds-m-40 add-company-border'>
            <TemplateUpdate
                currentInfo={currentInfo}
                setCurrentInfo={setCurrentInfo}
                onChangeInfoAction={onChangeInfoAction}
                tabList={tabList}
                tabName={tabName}
                addFieldsCancel={addFieldsCancel}
                onSubmit={updateUser}

            />

        </div>
    )
}
