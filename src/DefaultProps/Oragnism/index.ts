import { IOrganismTable } from "../../DesignSystem/Interfaces/Interfaces"
    

const DEFAULTTABLAPROPS: IOrganismTable = {
    containerClassName: "",
    className: "",
    withCheckox: false,
    onSelect: () => { },
    listSelectedElement: [],
    headers: [],
    data: []
}
export {
    DEFAULTTABLAPROPS
}