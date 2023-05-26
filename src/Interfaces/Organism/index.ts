import { IState } from "@piximind/custom-hook"
import { IKeys } from "../Common"

export declare enum TypeBtn {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    primaryLink = "primaryLink",
    secondaryLink = "secondaryLink"
}
interface IPublicOrganism {
    onChange: Function
    form?: IState
    isFormValid: boolean
    onSubmit: Function,
    onNavigate?: Function,
    isRegister?: boolean,
    isLogin?: boolean,
    isForgetpass?: boolean,
    isResetPass?: boolean,
    getIsinValidConfirmPassword?: Function
    getIsValidConfirmPassword?: Function
}
interface ITopOrganism {
    form?: any
    onChange: Function
    listCheckbox: string[]
    setListCheckbox: Function
    lang: IKeys
    onChangeSelect: Function
    selectOptionType?: { label: string; value: string; }[] | undefined
    selectValueType?: string[] | undefined
    querysearch?: string
    handleChangeSearch?: React.FormEventHandler<HTMLElement> | undefined
    selectOptionCreate?: { label: string; value: string; }[] | undefined
    selectValueCreate?: string[] | undefined
    selectOptionAction?: { label: string; value: string; }[] | undefined
    selectValueAction?: string[] | undefined
}
interface ISettingCol {
    search: string
}
export type {
    IPublicOrganism,
    ITopOrganism,
    ISettingCol
}