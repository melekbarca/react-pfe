import { IListData } from "@piximind/ds-p-23/lib/esn/Interfaces/Organisms/IOrganismTable/IOrganismTable";
import { IActivity } from "../Activity/IActivity";
import { ICity } from "../City/ICity";
import { IKeys, ISelectOption } from "../Common";
import { ICountry } from "../Country/ICountry";
import { IIndustry } from "../Industry/IIndustry";
import { ILanguage } from "../Language/ILanguage";
import { IPublicOrganism } from "../Organism";
import { IRole } from "../Role/IRole";
import { ISubsidiary } from "../Subsidiary/ISubsidiary";
import { IUser } from "../User/IUser";
import { IUserIdName } from "../UserIdName/IUserIdName";
import { IAccountIdName } from "../Account/IAccountIdName";
interface IPublicTemplate extends IPublicOrganism { }
interface ITemplateTest {
    onChange: Function
    form?: any
    isFormValid: boolean
}
interface ITemplateUsers {
    onChange?: Function
    form?: any
    utilisateur?: IUser[]
    onDelete?: Function
    updateUsersSort?: Function
}
interface ITemplateAddUser {
    onChange: Function
    form?: any
    roles?: IRole[]
    onSubmit?: Function
    getIsValidConfirmPassword?: Function
    getIsinValidConfirmPassword?: Function
    file: any
    setFile: Function
    passwordGenerer?: String
    updateUserPassword?: Function
    setPassword?: Function
    setConfirmPassword?: Function
}

interface ITemplateUserAuthentication {
    onChange: Function
    form?: any
    getIsValidConfirmPassword: Function
    getIsinValidConfirmPassword: Function
}

interface ITemplateSecurityAndAuthorization {
    onChange: Function
    form?: any
    onSubmit: Function
}

interface ITemplateAddAccount {
    onChange: Function
    form?: any
    isLoaded?: boolean
    sectors?: IIndustry[]
    subsidiaries?: ISubsidiary[]
    activities?: IActivity[]
    countries?: ICountry[]
    cities?: ICity[]
    users?: IUserIdName[]
    languages?: ILanguage[]
    selectedCountry: string[]
    setSelectedCountry: Function
    selectedActivities: string[]
    setSelectedActivities: Function
    file: any
    setFile: Function
    onPlusIconClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface ITemplateAddContact {
    onChange: Function
    form?: any
    countries?: ICountry[]
    cities?: ICity[]
    users?: IUserIdName[]
    accounts?: IAccountIdName[]
    languages?: ILanguage[]
    selectedCountry: string[]
    setSelectedCountry: Function
    onChangeFile?: Function
    onPlusIconClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface ITemplateUserPersonalInformation {
    onChange: Function
    form?: any
    roles: IRole[]
    onSubmit?: Function
}

interface ITemplateUpdateUser {
    onChange: Function
    form?: any
    roles: IRole[]
    onSubmit?: Function
}
interface ITemplateUsersList {
    lang: IKeys
    dataTable: IListData
    selectValueType: string[]
    selectOptionType: ISelectOption[]
    onChangeSelect: Function
    querysearch: string
    handleChangeSearch: Function
    selectOptionCreate: ISelectOption[]
    selectValueCreate: string[]
    selectOptionAction: ISelectOption[]
    selectValueAction: string[]
    actionGenerateColumn: Function
    actionResettingColumnSizes: Function
    onUpdate: Function
    onDelete: Function
    onArchive: Function
    listCheckbox: string[]
    setListCheckbox: Function
    headers: any
}
export type {
    IPublicTemplate,
    ITemplateTest,
    ITemplateUsers,
    ITemplateAddUser,
    ITemplateUpdateUser,
    ITemplateAddAccount,
    ITemplateAddContact,
    ITemplateUserPersonalInformation,
    ITemplateUserAuthentication,
    ITemplateSecurityAndAuthorization,
    ITemplateUsersList
}