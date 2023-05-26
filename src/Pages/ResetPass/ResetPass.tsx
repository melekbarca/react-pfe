import { useCallback, useContext, useEffect, useState } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { EListFunction, IUseFormResult, useForm } from "@piximind/custom-hook"
import { ResetPassTemplate } from "../../Template"
import { AuthAPI } from "../../Api"
import { IResetPass } from "../../Interfaces/ResetPass/IResetPass"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPass(): JSX.Element {
  const lang = useContext(LangContext)

  const verify = async () => {
    const auth = new AuthAPI()
    const response = await auth.verifyToken()
    if (response.data.success === true) {
      toast.success(response.data.message);
    }
    if (response.data.status !== 200) {
      toast.error(response.data.message);
      navigate("/login");

    }
  }
  useEffect(() => {
    verify();
  }, []);

  let navigate = useNavigate();
  const {
    state: form,
    onChange,
    isFormValid
  }: IUseFormResult = useForm({
    isRealTimeValidation: true,
    data: [
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
          }
        ],
        isRealTimeValidation: true
      }
    ]
  })
  const resetPassData: IResetPass = {
    password: String(form.password.value),
    confirmPassword: String(form.confirmPassword.value)
  }
  const resetPass = async () => {
    const auth = new AuthAPI()
    const response = await auth.resetPass(resetPassData)
    toast.success(response.data.message);
    navigate("/login")
  }
  const getIsinValidConfirmPassword = () => {
    return (
      form?.password.isInvalid ||
      form?.confirmPassword.isInvalid ||
      form?.password.value !== form?.confirmPassword.value
    )
  }
  const getIsValidConfirmPassword = () => {
    return (
      form?.password.isValid &&
      form?.confirmPassword.isValid &&
      form?.password.value === form?.confirmPassword.value
    )
  }
  return (
    <ResetPassTemplate
      onChange={onChange}
      form={form}
      isFormValid={isFormValid}
      onSubmit={resetPass}
      isResetPass
      getIsinValidConfirmPassword={getIsinValidConfirmPassword}
      getIsValidConfirmPassword={getIsValidConfirmPassword}
    />

  )
}

export default ResetPass
