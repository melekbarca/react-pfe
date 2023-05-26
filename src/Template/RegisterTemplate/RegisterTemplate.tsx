import { PublicOrganism } from "../../Organism"
import logo from "../../Common/Images/logo.svg"
import { IPublicTemplate } from "../../Interfaces"
const RegisterTemplate = ({ form, onChange, isFormValid, onSubmit, onNavigate, ...props }: IPublicTemplate) => {
  return (
    <div className="ds-flex-col ds-center ds-h-100">
      <img src={logo} className="ds-mb-32" />
      <div className="box ">
        <PublicOrganism
          form={form}
          onChange={onChange}
          isFormValid={isFormValid}
          onSubmit={onSubmit}
          onNavigate={onNavigate}
          isRegister
          getIsinValidConfirmPassword={props.getIsinValidConfirmPassword}
          getIsValidConfirmPassword={props.getIsValidConfirmPassword}
        />
      </div>
    </div>
  )
}
export default RegisterTemplate
