import React, { useContext } from "react"
import { Button, Input, Text } from "../../DesignSystem"
import { ESizeInput } from "../../DesignSystem/Types/Types"
import { Data, CommonFunction } from '../../Common'
import { useDispatch, useSelector } from "react-redux"
import { LangContext } from "../../Lang/Provider/Provider"
import { RootState } from "../../Interfaces/Redux"
import { setLang } from "../../Redux/Reducers"
import { ITemplateTest } from "../../Interfaces"
import { openModal } from "../../Redux/Reducers/ModalReducer/ModalReducer"
import { closeModal } from "../../Redux/Reducers/ModalReducer/ModalReducer"
const TemplateTest = ({ form, onChange, ...props }: ITemplateTest): JSX.Element => {
    const dispatch = useDispatch()
    const lang = useSelector((state: RootState) => state.setting.lang)
    const chooseLang = useContext(LangContext)
    const onRedux = () => {
        dispatch(setLang(lang === "fr" ? "en" : "fr"))
    }
    const onOpenModal = () => {
        dispatch(openModal({ name: "modalTestRef" }))
    }
    const onCloseModal = () => {
        dispatch(closeModal())
    }
    return <div className='ds-w-100 ds-h-100 ds-flex'>
        <div className="ds-w-50 ds-h-100 ds-p-10 " >
            <Text text='Form Test' className="ds-text-primary" />
            <Input
                inputSize={ESizeInput.medium}
                label={chooseLang.firstName}
                {...CommonFunction.getInputProps(form?.firstName)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                    key: "firstName",
                    value: e.target.value
                })}
            />
            <Input
                inputSize={ESizeInput.small}
                label='LastName'
                {...CommonFunction.getInputProps(form?.lastName)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                    key: "lastName",
                    value: e.target.value
                })}
            />
            <Input
                inputSize={ESizeInput.medium}
                label='password'
                {...CommonFunction.getInputProps(form?.password)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({
                    key: "password",
                    value: e.target.value
                })}
                isPassword
            />
            <Input
                isSelect
                inputSize={ESizeInput.medium}
                isClerable
                label='Select simple'
                {...CommonFunction.getSelectProps(form?.selectSimple)}
                onChangeSelect={(e: Array<string>) => onChange({
                    key: "selectSimple",
                    value: e
                })}
                selectOption={Data.getSelectOption()}
            />
            <Input
                isMulti
                isSelect
                isClerable
                isSearch
                inputSize={ESizeInput.medium}
                label='Select multiple'
                {...CommonFunction.getSelectProps(form?.selectMulti)}
                onChangeSelect={(e: Array<string>) => onChange({
                    key: "selectMulti",
                    value: e
                })}
                selectOption={Data.getSelectOption()}
            />
            <Button text='Submit' icon='' className='ds-mt-20' disabled={!props.isFormValid} />
            <Button text="Redux" onClick={onRedux} />
            <Button text="open" onClick={onOpenModal} />
            <Button text="close" onClick={onCloseModal} />
        </div>
    </div>
}
export default TemplateTest