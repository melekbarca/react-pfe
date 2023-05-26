import { Checkbox, ModalRefType } from "@piximind/ds-p-23";
import { Modal } from "../../DesignSystem"
import { IModalTest } from "../../Interfaces/Modal";
import { Ref, forwardRef, useContext, useState } from "react";
import { DropdownCol } from "../../Organism";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Interfaces";
import { setHeader } from "../../Redux/Reducers";
import { useUpdateEffect } from "../../CustomHooks";
import { LangContext } from "../../Lang/Provider/Provider";
const ModalManageCol = (props: IModalTest, ref: Ref<ModalRefType | undefined>) => {
    const lang = useContext(LangContext)
    const { data, tableName } = useSelector((state: RootState) => state?.modal)
    const { compteTable } = useSelector((state: RootState) => state?.tableHeader)
    const { contactTable } = useSelector((state: RootState) => state?.tableHeader)
    const { userTable } = useSelector((state: RootState) => state?.tableHeader)

    useUpdateEffect(() => {
        if (tableName === "compte") {
            setCheckedCol(

                compteTable?.map((item: any) => {
                    return item?.key
                })
            );
        }
        else if (tableName === "user") {
            setCheckedCol(

                userTable?.map((item: any) => {
                    return item?.key
                })
            );
        }
        else if (tableName === "contact") {
            setCheckedCol(

                contactTable?.map((item: any) => {
                    return item?.key
                })
            );
        }
        setDataColumns(data)
    }, [data, compteTable, userTable, contactTable])


    const [dataColumns, setDataColumns] = useState<any>([])
    const [checkedCol, setCheckedCol] = useState<number[]>([])
    const [search, setSearch] = useState<string>("")
    const handleChange = (value: string) => {
        setSearch(value)
        setDataColumns(data.filter((item: any) => {
            return (item?.label?.toLowerCase().includes(value?.toLowerCase()))
        }))
    }
    const dispatch = useDispatch()
    const onClose = () => {
        setCheckedCol([])
        setDataColumns([])
        setSearch("")
        if (props.onExit) {
            props.onExit()
        }
    }
    const onCheckCol = (key: string) => {
        setCheckedCol((prevState: any) =>
            prevState.includes(key)
                ? prevState.filter((item: string) => item !== key)
                : [...prevState, key]
        );
    }
    const onSubmit = () => {
        const newHeader = data?.filter((item: any) => {
            return checkedCol.includes(item.key);
        });
        dispatch(setHeader({ tableHeader: newHeader, tableName: tableName }))
        onClose()
    }
    const btnSubmitProps = {
        onClick: onSubmit,
        text: lang.enregistrer,
        disabled: checkedCol.length !== 0 ? false : true,
    }

    return <Modal
        withSubmitAction
        withCloseAction
        withCloseIcon
        ref={ref}
        onExit={props.onExit}
        onShow={props.onShow}
        containerClassName={"modal-manage-col"}
        contentClassName={"modal-width"}
        btnSubmitProps={btnSubmitProps}
    >
        <DropdownCol
            search={search}
            handleChange={handleChange}
            columns={dataColumns}
            onCheckCol={onCheckCol}
            checkedCol={checkedCol}
        />
    </Modal>

}
export default forwardRef(ModalManageCol)