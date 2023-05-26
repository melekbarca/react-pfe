import { EListFunction, IUseFormResult } from "@piximind/custom-hook"
import { RegisterTemplate } from "../../Template"
import { useForm } from "@piximind/custom-hook"
import { useState, useContext } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { AuthAPI } from "../../Api"
import { IRegister } from "../../Interfaces/Register/IRgister"
import { useNavigate } from "react-router-dom"

const Register = (): JSX.Element => {
  let navigate = useNavigate();
  const lang = useContext(LangContext)
  const {
    state: form,
    onChange,
    isFormValid
  }: IUseFormResult = useForm({
    isRealTimeValidation: true,
    data: [
      {
        key: "lastName",
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
        key: "firstName",
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
      }
    ]
  })
  const registerData: IRegister = {
    name: String(form.lastName.value),
    email: String(form.mail.value),
    password: String(form.password.value),
    confirmPassword: String(form.confirmPassword.value)
  }
  const register = async () => {
    const auth = new AuthAPI()
    const response = await auth.register(registerData)
    await navigate('/login')
  }
  const onNavigate = async () => {
    navigate('/login')
  }
  const getIsinValidConfirmPassword = () => {
    return form?.password.isInvalid || form?.confirmPassword.isInvalid || (form?.password.value !== form?.confirmPassword.value)
  }
  const getIsValidConfirmPassword = () => {
    return form?.password.isValid && form?.confirmPassword.isValid && (form?.password.value === form?.confirmPassword.value)
  }

  return (
    <RegisterTemplate
      onChange={onChange}
      form={form}
      isFormValid={isFormValid}
      onSubmit={register}
      onNavigate={onNavigate}
      isRegister
      getIsinValidConfirmPassword={getIsinValidConfirmPassword}
      getIsValidConfirmPassword={getIsValidConfirmPassword}
    />
  )
}

export default Register
