import { PublicOrganism } from "../../Organism"
import logo from "../../Common/Images/logo.svg"
import { IPublicTemplate } from "../../Interfaces"
const ForgetPassTemplate = ({
  form,
  onChange,
  isFormValid,
  onSubmit,
  ...props
}: IPublicTemplate) => {
  return (
    <div className=" ds-h-100 ds-flex ds-center">
      <div className=" ds-center ds-flex-col ds-h-100">
        <img src={logo} className="ds-mb-32" />
        <div className="box">
          <PublicOrganism
            form={form}
            onChange={onChange}
            isFormValid={isFormValid}
            onSubmit={onSubmit}
            isForgetpass
          />
        </div>
      </div>
    </div>
  )
}
export default ForgetPassTemplate
