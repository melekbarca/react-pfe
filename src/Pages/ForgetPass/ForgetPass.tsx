import { useContext } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { EListFunction, IUseFormResult, useForm } from "@piximind/custom-hook"
import { ForgetPassTemplate } from "../../Template"
import { IForgetPass } from "../../Interfaces/ForgetPass/IForgetPass"
import { AuthAPI } from "../../Api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPass(): JSX.Element {
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
          },
        ],
        isRealTimeValidation: true
      }
    ]
  })
  const forgetPassData: IForgetPass = {
    email: String(form.mail.value),
  }
  const forgetPass = async () => {
    const auth = new AuthAPI()
    const response = await auth.forgetPass(forgetPassData)
    if (response.data.success === true) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }

  }
  return (
    <ForgetPassTemplate
      onChange={onChange}
      form={form}
      isFormValid={isFormValid}
      onSubmit={forgetPass}
      isForgetpass
    />
  )
}

export default ForgetPass
