import { useRef, useState } from "react"
import { ModalManageCol, ModalTest } from "../../Modal"
import { ModalRefType } from "../../DesignSystem/Interfaces/Interfaces"
import { useSelector, useDispatch } from "react-redux"
import { IKeysModal, RootState } from "../../Interfaces";
import { useUpdateEffect } from "../../CustomHooks";
import { closeModal } from "../../Redux/Reducers/ModalReducer/ModalReducer";
import FormModal from "../../Modal/FormModal/FormModal";
function ModalProvider() {
    const { name, data } = useSelector((state: RootState) => state?.modal);
    const modalName = useRef("")
    const modalTestRef = useRef<ModalRefType>()
    const modalColRef = useRef<ModalRefType>()
    const formModalRef = useRef<ModalRefType>()
    const dispatch = useDispatch()

    const onExit = (key: string) => {
        switch (key) {
            case "modalTestRef":
                modalTestRef.current?.onClose()
                break;
            case "modalColRef":
                modalColRef.current?.onClose()
                break;
            case "formModalRef":
                formModalRef.current?.onClose()
                break;

            default:
                break;
        }
        dispatch(closeModal())
        modalName.current = ""
    }
    const onShow = (key: string) => {
        modalName.current = key
        switch (key) {
            case "modalTestRef":
                modalTestRef.current?.onOpen()
                break;
            case "modalColRef":
                modalColRef.current?.onOpen()
                break;
            case "formModalRef":
                formModalRef.current?.onOpen()
                break;

            default:
                break;
        }

    }
    useUpdateEffect(() => {
        if (name) {
            if (modalName.current === "") {
                onShow(name)
            }
        }
    }, [name])
    return <>
        <ModalTest
            ref={modalTestRef}
            data={data}
            onExit={() => onExit("modalTestRef")}
            onShow={() => onShow("modalTestRef")}
        />
        <ModalManageCol
            ref={modalColRef}
            data={data}
            onExit={() => onExit("modalColRef")}
            onShow={() => onShow("modalColRef")}
        />
        <FormModal
            ref={formModalRef}
            data={data}
            onExit={() => onExit("formModalRef")}
            onShow={() => onShow("formModalRef")}

        />
    </>
}
export default ModalProvider