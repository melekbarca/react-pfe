import { Button, ESizeInput, Input, Checkbox, Text } from "@piximind/ds-p-23"
import { CommonFunction } from "../../Common"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { IPublicOrganism } from "../../Interfaces"
import { TypeButton } from "../../DesignSystem/Types/Types"
const PublicOrganism = ({ form, onChange, onSubmit, onNavigate, ...props }: IPublicOrganism): JSX.Element => {
  const lang = useContext(LangContext)
  const renderTitle = () => {
    let message = ""
    if (props.isRegister) {
      message += lang?.inscriptionTitle
    }
    if (props.isLogin) {
      message += lang?.connexionTitle
    }
    if (props.isForgetpass) {
      message += lang?.ForgetPassTitle
    }
    if (props.isResetPass) {
      message += lang?.resetPassTitle
    }
    return `${message} `
  }
  const renderMsgCheckBox = () => {
    let message = ""
    if (props.isRegister) {
      message += lang?.acceptCondition
    }
    if (props.isLogin) {
      message += lang?.rememberMe
    }
    return `${message} `
  }
  const renderMsgPrimaryButton = () => {
    let message = ""
    if (props.isRegister) {
      message += lang?.register
    }
    if (props.isLogin) {
      message += lang?.connexion
    }
    if (props.isForgetpass) {
      message += lang?.forgetPassBtn
    }
    if (props.isResetPass) {
      message += lang?.resetPassBtn
    }
    return `${message} `
  }
  const renderMsgSecondaryButton = () => {
    let message = ""
    if (props.isRegister) {
      message += lang?.connexion
    }
    if (props.isLogin) {
      message += lang?.register
    }
    return `${message} `
  }
  return (
    <div className="ds-p-48 border-solid">
      <div className="ds-flex-col">
        <Text text={renderTitle()} className="text-center type-4 " />
        {form?.lastName && props.isRegister && (
          <Input
            inputSize={ESizeInput.large}
            label={lang?.lastName}
            {...CommonFunction.getInputProps(form?.lastName)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "lastName",
                value: e.target.value
              })
            }
          />
        )}
        {form?.firstName && props.isRegister && (
          <Input
            inputSize={ESizeInput.large}
            label={lang?.firstName}
            {...CommonFunction.getInputProps(form?.firstName)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "firstName",
                value: e.target.value
              })
            }
          />
        )}
        {form?.mail && (
          <Input
            inputSize={ESizeInput.large}
            label={lang?.identifiant}
            {...CommonFunction.getInputProps(form?.mail)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "mail",
                value: e.target.value
              })
            }
          />
        )}
        {form?.password && (
          <Input
            inputSize={ESizeInput.large}
            label={lang?.mdp}
            {...CommonFunction.getInputProps(form?.password)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({
                key: "password",
                value: e.target.value
              })
            }
            isPassword
          />
        )}
        {form?.confirmPassword && !props.isLogin && !props.isForgetpass && (
          <Input
            inputSize={ESizeInput.large}
            label={lang?.confirmPassword}
            {...CommonFunction.getInputProps(form?.confirmPassword)}
            isInvalid={props.getIsinValidConfirmPassword && props.getIsinValidConfirmPassword()}
            isValid={props.getIsValidConfirmPassword && props.getIsValidConfirmPassword()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange({
                key: "confirmPassword",
                value: e.target.value
              })
            }}
            isPassword
          />
        )}
        {props.isLogin && (
          <Link
            to="/forgetPass"
            className="ds-text-size-12 ds-text-line-28 ds-text-dark ds-mt-10 ds-flex ds-justify-end "
          >
            <Text text={lang?.forgetPass} />
          </Link>
        )}
        {form?.save && (
          <div className="ds-mt-8">
            <Checkbox
              label={renderMsgCheckBox()}
              {...CommonFunction.getInputProps(form?.save)}
              checked={form.save.value ? (form.save.value as boolean) : false}
              onClick={() => {
                const value = form.save.value ? (form.save.value as boolean) : false
                onChange({
                  key: "save",
                  value: !value
                })
              }}
              className="ds-mr-15 "
              containerClassName="ds-mb-15"
            />
          </div>
        )}
        <Button
          text={renderMsgPrimaryButton()}
          className={props.isForgetpass ? "ds-w- ds-mt-30" : "ds-w-100 ds-mt-10"}
          onClick={onSubmit}
          disabled={!props.isFormValid && form?.confirmPassword !== form?.password}
        />
        {!props.isForgetpass && !props.isResetPass && (
          <Link
            to="#"
            className="ds-flex ds-text-size-12 ds-text-line-28 ds-text-dark ds-justify-around ds-mt-16"
          >
            <Text text={lang?.haveAccount} />
          </Link>
        )}
        {!props.isForgetpass && !props.isResetPass && (
          <Button
            text={renderMsgSecondaryButton()}
            className="ds-w-100 ds-mt-10"
            onClick={onNavigate}
            type={TypeButton.secondary}
          />
        )}
      </div>
    </div>
  )
}

export default PublicOrganism
