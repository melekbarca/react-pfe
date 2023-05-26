import { useContext, useEffect, useState } from 'react'
import { TemplateCreate } from '../../Template';
import { Icon } from '@piximind/ds-p-23';
import { LangContext } from '../../Lang/Provider/Provider';
import { IUseFormResult } from '../../CustomHooks/Interfaces/Interfaces'
import { EListFunction } from '../../CustomHooks/Types/Types'
import { useForm, useUpdateEffect } from '../../CustomHooks'
import { IRole } from '../../Interfaces/Role/IRole'
import { IAddUser } from '../../Interfaces/User/IAddUser';
import { useNavigate } from 'react-router';
import { AuthAPI } from "../../Api"
import PersonalInformationTemplate from '../../Template/UsersTemplate/personalInformationTemplate';
import AuthenticationTemplate from '../../Template/UsersTemplate/AuthenticationTemplate';
import SecurityAndAuthorizationTemplate from '../../Template/UsersTemplate/SecurityAndAuthorizationTemplate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { IInviteUser } from '../../Interfaces/User/IInviteUser';

export default function AddUser() {
    const lang = useContext(LangContext)
    const tabList: string[] = [lang.personalInformation, lang.authentication, lang.securityAndAuthorization];
    const tabName: string = lang.addUser;
    const [currentInfo, setCurrentInfo] = useState<number>(0)
    const [roles, setRoles] = useState<IRole[]>([]);
    const [file, setFile] = useState<any>();
    const [passwordGenerer, setPasswordGenerer] = useState<String>("")
    const navigate = useNavigate()
    const condSaveNew: string = "add";
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const genererPassword = async () => {
        const auth = new AuthAPI()
        const response = await auth.genererPassword()
        setPasswordGenerer(response.data.passwordUser)
        updateUserPassword(form.generatePassword.value as boolean)
        if (form.generatePassword.value as boolean === true) {
            const generatedPassword = response.data?.passwordUser
            form.password.value = generatedPassword
            form.confirmPassword.value = generatedPassword
        } else {
            form.password.value = ""
            form.confirmPassword.value = ""
        }
    }


    const addFieldsCancel = () => {
        navigate("/users")
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
                        <p><b>{lang.alertAddUser}</b></p>
                    </div>
                );
            }
        });
    }

    const updateUserPassword = (value: boolean) => {
        if (value == true) {
            setPassword(String(passwordGenerer))
            setConfirmPassword(String(passwordGenerer))
        }
    }

    const { state: form, onChange }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "identifier",
                value: "",
                isRealTimeValidation: true,
                rules: [{
                    function: EListFunction.isNotEmpty,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
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
                key: "email",
                value: "",
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
                value: [],
                rules: [{
                    function: EListFunction.isArray,
                    messageError: lang.emptyMessage,
                    priority: 0,
                }],
                isRealTimeValidation: true,
            },
            {
                key: "password",
                value: "",
                rules: [
                    {
                        function: EListFunction.isNotEmpty,
                        messageError: lang.emptyMessage,
                        priority: 0
                    }
                ],
                isRealTimeValidation: true
            },
            {
                key: "confirmPassword",
                value: "",
                rules: [
                    {
                        function: EListFunction.isNotEmpty,
                        messageError: lang.emptyMessage,
                        priority: 0
                    },
                ],
                isRealTimeValidation: true
            },
            {
                key: "generatePassword",
                value: false,
                isRealTimeValidation: true
            },
            {
                key: "status",
                value: true,
                isRealTimeValidation: true,
            },
            {
                key: "access",
                value: true,
                isRealTimeValidation: true,
            },
            {
                key: "inviteUser",
                value: false,
                isRealTimeValidation: true
            },
        ]
    })
    useEffect(() => {
        getRoles()
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
            setRoles(myData)
        }
    }
    const inviteUserData: IInviteUser = {
        email: String(form.email.value),
        password: String(form.password.value),
        inviteUser: Number(form.inviteUser.value)
    }

    const inviteUser = async () => {
        const auth = new AuthAPI()
        const response = await auth.inviteUser(addUserData);
    }
    const addUserData: IAddUser = {
        identifier: String(form.identifier.value),
        name: String(form.name.value),
        email: String(form.email.value),
        roleId: Number(form.role.value),
        password: String(form.password.value),
        confirmPassword: String(form.confirmPassword.value),
        status: Number(form.status.value),
        access: Number(form.access.value),
        generatePassword: Number(form.generatePassword.value),
        inviteUser: Number(form.inviteUser.value)
    }

    const addUser = async () => {
        let formData = new FormData();
        formData.append('identifier', addUserData.identifier);
        formData.append('name', addUserData.name);
        formData.append('email', addUserData.email);
        formData.append('roleId', String(addUserData.roleId));
        formData.append('password', addUserData.password);
        formData.append('confirmPassword', addUserData.confirmPassword);
        formData.append('status', String(addUserData.status));
        formData.append('access', String(addUserData.access));
        formData.append('generatePassword', String(addUserData.generatePassword));
        formData.append('inviteUser', String(addUserData.inviteUser));
        formData.append('image', file);
        const auth = new AuthAPI();
        const response = await auth.addUser(formData);
        if (addUserData.inviteUser == 1) {
            inviteUser()
        }
        showAlert()
        navigate("/users");
    };

    const addUserNew = async () => {
        let formData = new FormData();
        formData.append('identifier', addUserData.identifier);
        formData.append('name', addUserData.name);
        formData.append('email', addUserData.email);
        formData.append('roleId', String(addUserData.roleId));
        formData.append('password', addUserData.password);
        formData.append('confirmPassword', addUserData.confirmPassword);
        formData.append('status', String(addUserData.status));
        formData.append('access', String(addUserData.access));
        formData.append('generatePassword', String(addUserData.generatePassword));
        formData.append('inviteUser', String(addUserData.inviteUser));
        formData.append('image', file);
        const auth = new AuthAPI()
        const response = await auth.addUser(formData)
        if (addUserData.inviteUser == 1) {
            inviteUser()
        }
        showAlert()
        window.location.reload()
    }

    useUpdateEffect(() => {
        genererPassword()
    }, [addUserData.generatePassword]);

    const getIsinValidConfirmPassword = () => {
        return form?.password.isInvalid || form?.confirmPassword.isInvalid || (form?.password.value !== form?.confirmPassword.value)
    }
    const getIsValidConfirmPassword = () => {
        return form?.password.isValid && form?.confirmPassword.isValid && (form?.password.value === form?.confirmPassword.value)
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
            case 1:
                return (
                    <AuthenticationTemplate
                        onChange={onChange}
                        form={form}
                        file={file}
                        setFile={setFile}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                        updateUserPassword={updateUserPassword}
                        passwordGenerer={passwordGenerer}
                        getIsinValidConfirmPassword={getIsinValidConfirmPassword}
                        getIsValidConfirmPassword={getIsValidConfirmPassword} />
                )
            case 2:
                return (
                    <SecurityAndAuthorizationTemplate
                        onChange={onChange}
                        form={form}
                        file={file}
                        setFile={setFile} />
                )


        }

    }
    return (
        <div className='ds-h-100 ds-m-40 add-company-border'>
            <TemplateCreate
                currentInfo={currentInfo}
                condSaveNew={condSaveNew}
                setCurrentInfo={setCurrentInfo}
                onChangeInfoAction={onChangeInfoAction}
                tabList={tabList}
                tabName={tabName}
                addFieldsCancel={addFieldsCancel}
                addFieldsSave={addUser}
                addFieldsSaveNew={addUserNew}
            />

        </div>
    )
}








