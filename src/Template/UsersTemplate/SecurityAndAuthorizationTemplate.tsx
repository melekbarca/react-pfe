import { useContext, useState } from 'react'
import { Checkbox, Radio, Text } from '@piximind/ds-p-23'
import { LangContext } from '../../Lang/Provider/Provider'
import { CommonFunction } from '../../Common/Function/Function'
import { ITemplateAddUser } from '../../Interfaces'

const SecurityAndAuthorizationTemplate = ({ form, onChange, onSubmit, ...props }: ITemplateAddUser): JSX.Element => {
  const lang = useContext(LangContext)
  const [selectRadioState, setSelectRadioState] = useState<string>("1")
  const [selectRadioAccess, setSelectRadioAccess] = useState<string>("1")
  return (
    <div className="ds-w-70 ds-p-30 ds-ml-120 ds-flex-row " >
      <div className="ds-w-60 " >
        <div className="ds-mb-10">
          <Text isLabel text={lang.state} />
          <Radio
            value={selectRadioState}
            label="status"
            onClick={(e: any) => {
              onChange({
                key: "status",
                value: e.target.value
              })
              setSelectRadioState(e.target.value)
            }}
            data={[{ label: lang.activated, value: "1" }, { label: lang.desactivated, value: "0" }]}
          />
        </div>
        <div className="ds-mb-10">
          <Text isLabel text={lang.access} />
          <Radio
            value={selectRadioAccess}
            label="access"
            onClick={(e: any) => {
              onChange({
                key: "access",
                value: e.target.value,
              })
              setSelectRadioAccess(e.target.value)
            }}
            data={[{ label: lang.authorized, value: "1" }, { label: lang.unauthorized, value: "0" }]}
          />
        </div>
        <div className="ds-mb-20 ds-mt-30" >
          <Checkbox
            label={lang.inviteNewUser}
            {...CommonFunction.getInputProps(form?.inviteUser)}
            checked={form.inviteUser.value ? (form.inviteUser.value as boolean) : false}
            onClick={() => {
              const value = form.inviteUser.value ? (form.inviteUser.value as boolean) : false
              onChange({
                key: "inviteUser",
                value: !value
              })
            }}
            className="ds-mr-15 "
            containerClassName="ds-mb-15"
          />
        </div>
      </div>
    </div>
  )
}

export default SecurityAndAuthorizationTemplate
