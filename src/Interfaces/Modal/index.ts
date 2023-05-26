import { IState } from "@piximind/custom-hook";
import { ModalRefType } from "@piximind/ds-p-23";

interface IBasicModal {
    onExit?: Function,
    onShow?: Function,
    data?: any
}
interface IModalTest extends IBasicModal { }
interface IFormModal extends IBasicModal { }
interface IFormModalOrganism {
    title: string
    form: IState
    isFormValid: boolean
    onChange: Function
}
export type {
    IBasicModal,
    IModalTest,
    IFormModal,
    IFormModalOrganism
}