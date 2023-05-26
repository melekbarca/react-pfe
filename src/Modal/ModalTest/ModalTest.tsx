import { ModalRefType } from "@piximind/ds-p-23";
import { Modal } from "../../DesignSystem"
import { IModalTest } from "../../Interfaces/Modal";
import { Ref, forwardRef } from "react";
const ModalTest = (props: IModalTest, ref: Ref<ModalRefType | undefined>) => {
    const onClose = () => {
        if (props.onExit) {
            props.onExit()
        }
    }
    return <Modal
        withSubmitAction
        withCloseAction
        withCloseIcon
        ref={ref}
        onExit={props.onExit}
        onShow={props.onShow}
    >

        <p onClick={onClose}>hello</p>
        test Modal
    </Modal>

}
export default forwardRef(ModalTest)