import { SizeButton } from "../../DesignSystem/Types/Types"
import { IAtomPlaceHolder, IAtomAvatar, IAtomCheckbox, IAtomIcon, IAtomRadio, IAtomSpinner, IMoleculeButton, ITextAreaProps } from "../../DesignSystem/Interfaces/Interfaces"
import { TypeCheckbox, ETypesInput, ESizeInput, ESizeAvatar, TypeButton, TypeLabel } from "../../DesignSystem/Types/Types"

const DEFAULTTEXTPROPS = {
    isLoading: false,
    isLabel: false,
    isSpan: false,
    text: "",
    id: undefined,
    bsPrefix: undefined,
    weight: undefined,
    onClick: () => { return },
    className: "",
}
const DEFAULTPLCAHOLDERPROPS: IAtomPlaceHolder = {
    style: {},
    className: "",
}


const DEFAULTBUTTONPROPS: IMoleculeButton = {
    style: {},
    className: "",
    onClick: () => { return },
    children: "",
    type: TypeButton.primary,
    disabled: false,
    isRadius: false,
    size: SizeButton.medium,
    bsPrefix: "",
}

const DEFAULTMOLECULEBUTTONPROPS: IMoleculeButton = {
    isLoading: false,
    isRightIcon: false,
    text: "",
}

const DEFAULTATOMICONPROPS: IAtomIcon = {
    icon: "Setting",
    className: "",
    style: {},
    size: "12",
    color: "",
    onClick: () => { return }
}
const DEFAULTIMPORTATOMICONPROPS = {
    icon: "",
    iconClassName: "",
    iconStyle: {},
    iconSize: "12",
    iconColor: ""
}

const DEFAULTSPINNERPROPS: IAtomSpinner = {
    width: "12",
    height: "12",
    className: "",
    color: "",
    // type: Type.primary
}
const DEFAULTINPUTATOMPROPS = {
    className: '',
    id: '',
    value: '',
    type: 'text' as ETypesInput,
    inputSize: 'medium' as ESizeInput,
    placeholder: '',
    onChange: () => { return },
    disabled: false,
    isInvalid: false,
    isValid: false,
    bsPrefix: ""
}

const DEFAULTCHECKBOXPROPS: IAtomCheckbox = {
    className: '',
    labelClassName: "",
    label: "",
    type: TypeCheckbox.checkbox,
    onClick: () => { return },
    disabled: false,
    checked: true,
    bsPrefix: "",
    labelBsPrefix: "",
    isValid: false,
    isInvalid: false,
    containerClassName: ""
}
const DEFAULTAVATARPROPS: IAtomAvatar = {
    className: "",
    textClassName: "",
    containerClassName: "",
    statusClassName: "",


    style: [],
    alt: "",
    src: "",
    size: ESizeAvatar.xxlarge,
    firstname: "",
    lastname: "",
    isImage: false,
    status: false,
    isActive: false,

    bsPrefix: "",
    textBsPrefix: "",
    statusBsPrefix: "",
    containerBsPrefix: "",

}
const DEFAULTRADIOPROPS: IAtomRadio = {
    className: '',
    labelClassName: "",
    label: "",
    onClick: () => { return },
    disabled: false,
    bsPrefix: "",
    labelBsPrefix: "",
    isValid: false,
    isInvalid: false,
    containerClassName: "",
    name: "",
    data: [],
    value: ""
}

const DEFAULTLABELPROPS = {
    className: "",
    typeLabel: TypeLabel.Progress,
    bsPrefix: "",
    primary: true
}

const DEFAULTPAGINATIONPROPS = {
    page: 1,
    numberOfPage: 5,
    onClick: () => { },
    containerClassName: '',
    iconNavigation: true,
    maxElementInPagination: 5
}

const DEFAULTTEXTAREAPROPS: ITextAreaProps = {
    className: "",
    bsPrefix: "",
    disabled: false,
    isInvalid: false,
    isValid: false,
    rows: 10,
    id: '',
    value: '',
    placeholder: '',
    onChange: () => { return },
}
export {
    DEFAULTTEXTPROPS,
    DEFAULTPLCAHOLDERPROPS,
    DEFAULTBUTTONPROPS,
    DEFAULTMOLECULEBUTTONPROPS,
    DEFAULTATOMICONPROPS,
    DEFAULTIMPORTATOMICONPROPS,
    DEFAULTSPINNERPROPS,
    DEFAULTINPUTATOMPROPS,
    DEFAULTCHECKBOXPROPS,
    DEFAULTAVATARPROPS,
    DEFAULTRADIOPROPS,
    DEFAULTLABELPROPS,
    DEFAULTPAGINATIONPROPS,
    DEFAULTTEXTAREAPROPS
}