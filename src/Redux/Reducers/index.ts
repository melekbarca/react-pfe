import SettingReducer, { setLang } from "./SettingReducer/SettingReducer";
import ScreenReducer, { setScreen } from "./ScreenReducer/ScreenReducer";
import AuthReducer, { setToken, resetToken } from "./AuthReducer/AuthReducer";
import SideBarReducer , {setSideBar} from "./SideBarReducer/SideBarReducer";
import TableHeaderReducer, { setHeader } from "./TableHeaderReducer/TableHeaderReducer";

export {
    setLang, SettingReducer,
    setScreen, ScreenReducer,
    setToken, resetToken, AuthReducer,
    SideBarReducer, setSideBar,
    setHeader, TableHeaderReducer
}