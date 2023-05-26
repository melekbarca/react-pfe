import { store } from "../../Redux/Store/Store"

interface IUser {
    firstName?: string
    lastName?: string
}
interface IUpdateReducer {
    selectedId: null
}
interface IAuthReducer {
    accessToken: string
    refreshToken: string
    user?: IUser | null
}
interface IScreenReducer {
    height: string | number,
    width: string | number
}
interface ISettingReducer {
    lang: string
}
interface IOpenModal {
    name: string,
    data?: any
}
interface ICloseModal {
    name: string,
}
interface IModalReducer {
    data?: any,
    name: string,
    tableName: string,
}interface ISideBarReducer {
    show: boolean
}
interface ITableHeaderReducer {
    contactTable: [],
    compteTable: [],
    userTable: [],
}

export type {
    IAuthReducer,
    IScreenReducer,
    ISettingReducer,
    IOpenModal,
    ICloseModal,
    IModalReducer,
    ISideBarReducer,
    ITableHeaderReducer,
    IUpdateReducer
}
export type RootState = ReturnType<typeof store.getState> 