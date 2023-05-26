import { EListFunction, IUseFormResult } from "@piximind/custom-hook"
import { LoginTemplate } from "../../Template"
import { useForm } from "@piximind/custom-hook"
import { useState, useContext } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { AuthAPI } from "../../Api"
import { useNavigate } from "react-router-dom"
import { ILogin } from "../../Interfaces/Login/ILogin"
import { useDispatch } from "react-redux"
import { setToken } from "../../Redux/Reducers/AuthReducer/AuthReducer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (): JSX.Element => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const lang = useContext(LangContext)
  const {
    state: form,
    onChange,
    isFormValid
  }: IUseFormResult = useForm({
    isRealTimeValidation: true,
    data: [
      {
        key: "mail",
        value: "",
        rules: [
          {
            function: EListFunction.isNotEmpty,
            messageError: lang.emptyMessage,
            priority: 0
          },
          {
            function: EListFunction.isMail,
            messageError: lang.invalidMailMessage,
            priority: 10
          }
        ],
        isRealTimeValidation: true
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
        key: "save",
        value: false,
        rules: [
          {
            function: EListFunction.isTrue,
            messageError: lang.emptyMessage,
            priority: 0
          }
        ],
        isRealTimeValidation: true
      },
    ]
  })

  const loginData: ILogin = {
    email: String(form.mail.value),
    password: String(form.password.value)
  }
  const login = async () => {
    const auth = new AuthAPI()
    const response = await auth.login(loginData)
    if (response.data.statusCode === 200) {
      toast.error(response.data.message);
    } else {
      navigate('/')
      dispatch(
        setToken({
          accessToken: response.data[0].original.access_token,
          refreshToken: response.data[0].original.refresh_token,
          user: response.data.user
        })
      )
    }
  }
  const onNavigate = async () => {
    navigate('/register')
  }

  return (
    <LoginTemplate
      onChange={onChange}
      form={form}
      isFormValid={isFormValid}
      onSubmit={login}
      onNavigate={onNavigate}
      isLogin
    />
  )
}

export default Login
