import { Modal } from "../../DesignSystem"
import { Ref, forwardRef, useState, useContext } from "react"
import { ModalRefType } from "../../DesignSystem/Interfaces/Interfaces"
import { Type } from "@piximind/ds-p-23/lib/esn/Interfaces"
import { LangContext } from "../../Lang/Provider/Provider"
import FormModalOrganism from "../FormModalOrganism/FormModalOrganism"
import { EListFunction, IUseFormResult, useForm } from "@piximind/custom-hook"
import { IFormModal } from "../../Interfaces/Modal"

const FormModal = (props: IFormModal, ref: Ref<ModalRefType | undefined>) => {
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const lang = useContext(LangContext)

    const {
        state: form,
        onChange: onChange,
        isFormValid: isFormValid
    }: IUseFormResult = useForm({
        isRealTimeValidation: true,
        data: [
            {
                key: "fieldLabel",
                value: "",
                rules: [
                    {
                        function: EListFunction.isNotEmpty,
                        messageError: lang.emptyMessage,
                        priority: 0
                    },
                    {
                        function: EListFunction.hasUperCase,
                        messageError: lang.upperCaseMessage,
                        priority: 10
                    },
                    {
                        function: EListFunction.hasLowerCase,
                        messageError: lang.lowerCaseMessage,
                        priority: 20
                    },
                    {
                        function: EListFunction.hasSpecial,
                        messageError: lang.specialCharacterMessage,
                        priority: 30
                    },
                    {
                        function: EListFunction.hasNumber,
                        messageError: lang.numberMessage,
                        priority: 40
                    }
                ],
                isRealTimeValidation: true
            },
            {
                key: "fieldType",
                value: "",
                rules: [
                    {
                        function: EListFunction.isNotEmpty,
                        messageError: lang.emptyMessage,
                        priority: 0
                    },
                    {
                        function: EListFunction.hasUperCase,
                        messageError: lang.upperCaseMessage,
                        priority: 10
                    },
                    {
                        function: EListFunction.hasLowerCase,
                        messageError: lang.lowerCaseMessage,
                        priority: 20
                    },
                    {
                        function: EListFunction.hasSpecial,
                        messageError: lang.specialCharacterMessage,
                        priority: 30
                    },
                    {
                        function: EListFunction.hasNumber,
                        messageError: lang.numberMessage,
                        priority: 40
                    }
                ],
                isRealTimeValidation: true
            },
        ]
    })
    const onSubmit = () => {
        if (props.data.cancel) {
            props.data.cancel()
        }
        if (props.onExit) {
            props.onExit()
        }
    }

    const onReset = async () => {
        setIsLoadingBtn(true)
        if (props.data.submit) {
            props.data?.submit()
        }
        if (props.onExit) {
            props.onExit()
        }
        setIsLoadingBtn(false)
    }

    const btnCancelProps = {
        onClick: onSubmit,
        type: Type.secondary,
        text: props.data?.cancelText
    }

    const btnSubmitProps = {
        onClick: onReset,
        text: props.data?.submitText,
        isLoading: isLoadingBtn,
        disabled: isLoadingBtn
    }
    return (
        <Modal
            containerClassName={"modal-manage-col"}
            contentClassName={"modal-width"}
            withSubmitAction
            withCloseAction
            withCloseIcon
            ref={ref}
            onExit={props.onExit}
            onShow={props.onShow}
            btnResetProps={btnCancelProps}
            btnSubmitProps={btnSubmitProps}
        >
            <FormModalOrganism
                title={props.data?.title}
                form={form}
                onChange={onChange}
                isFormValid={isFormValid}
            />
        </Modal>
    )
}
export default forwardRef(FormModal)