import React, { useContext } from 'react'
import { Checkbox, ESizeInput, Input } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddUser } from '../../Interfaces'

const PersonalInformationTemplate = ({ form, onChange, getIsinValidConfirmPassword, getIsValidConfirmPassword, passwordGenerer, updateUserPassword, setPassword, setConfirmPassword, ...props }: ITemplateAddUser): JSX.Element => {
  const lang = useContext(LangContext)
  const value = form.generatePassword.value ? (form.generatePassword.value as boolean) : false;
  return (
    <div className="ds-w-70 ds-p-30 ds-ml-120 ds-flex-row " >
      <div className="ds-w-60 " >
        <div className="ds-mb-20" >
          <Input
            className="ds-mt-3 inputAdd"
            label={`${lang?.mdp} *`}
            isPassword
            disabled={form?.password.value == passwordGenerer}
            inputSize={ESizeInput.small}
            {...CommonFunction.getInputProps(form?.password)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword && setPassword(passwordGenerer)
              onChange({
                key: "password",
                value: e.target.value
              })
            }}
          />
        </div>
        <div className="ds-mb-20" >
          <Input
            className="ds-mt-3 inputAdd"
            label={`${lang?.confirmPassword} *`}
            isPassword
            disabled={form?.confirmPassword.value == passwordGenerer}
            inputSize={ESizeInput.small}
            {...CommonFunction.getInputProps(form?.confirmPassword)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword && setConfirmPassword(passwordGenerer)
              onChange({
                key: "confirmPassword",
                value: e.target.value
              })
            }}
            isInvalid={getIsinValidConfirmPassword && getIsinValidConfirmPassword()}
            isValid={getIsValidConfirmPassword && getIsValidConfirmPassword()}
          />
        </div>
        <div className="ds-mb-20" >
          <Checkbox
            label={lang.generatePassword}
            {...CommonFunction.getInputProps(form?.generatePassword)}
            checked={form.generatePassword.value ? (form.generatePassword.value as boolean) : false}
            onClick={() => {
              onChange({
                key: "generatePassword",
                value: !value
              });
              if (!value === true) {
                updateUserPassword && updateUserPassword(!value)
                setPassword && setPassword(passwordGenerer)
                setConfirmPassword && setConfirmPassword(passwordGenerer)
              } else {
                setPassword && setPassword("")
                setConfirmPassword && setConfirmPassword("")
              }

            }}
            className="ds-mr-15 "
            containerClassName="ds-mb-15"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationTemplate
