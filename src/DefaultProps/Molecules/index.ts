import { ENavbarPosition } from '../../DesignSystem/Types/Types'
import { IMolInputProps, IMoleculeStepper, IMoleculeTab } from '../../DesignSystem/Interfaces/Interfaces'

const DEFAULTINPUTMOLPROPS: IMolInputProps = {
    containerClassName: "",
    listIcons: [],
    isPassword: false,
    isSelect: false,
    selectValue: [],
    selectOption: [],
    onChangeSelect: () => { return },
    isMulti: false,
    isClerable: false,
    onClear: () => { return },
    isSearch: false,
    messageNoOptions: "Aucun élément"
}
const DEFAULTINPUTMESSAGEPROPS = {
    label: "",
    labelClassName: "",
    error: "",
    errorClassName: "",
    success: "",
    successClassName: "",
}

const DEFAULTTOPBARPROPS = {
    className: "",
    position: ENavbarPosition.center,
    links: [],
    btnText: "",
    withButton: true,
    onClick: () => { return },
}

const DEFAULTPRICINGPROPS = {
    className: "",
    withTitle: false,
    bsPrefix: "",
    containerClassName: "",
    iconClassName: "",
    title: "",
    description: "",
    data: []
}
const DEFAULTSTEPPERPROPS: IMoleculeStepper = {
    data: [],
    className: "",
    titleClassName: "",
    textClassName: "",
    containerClassName: "",
    bsPrefix: "",
    containerBsPrefix: "",
    isVertical: true,
    withLike: false,
    children: null,
    onChange: () => { return },
    step: null
}
const DEFAULTTABPROPS: IMoleculeTab = {
    tabClassName: "",
    onClick: () => { return },
    list: [],
    selectedIndex: 0,
}
export {
    DEFAULTTOPBARPROPS,
    DEFAULTINPUTMOLPROPS,
    DEFAULTINPUTMESSAGEPROPS,
    DEFAULTPRICINGPROPS,
    DEFAULTSTEPPERPROPS,
    DEFAULTTABPROPS
}