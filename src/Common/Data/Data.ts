import { IKeys } from "../../Interfaces"

class Data {
  private static instance: Data
  constructor() { }


  public static getInstance(): Data {
    if (!Data.instance) {
      Data.instance = new Data()
    }
    return Data.instance
  }
  static getSelectOption() {
    return [
      { label: "test1", value: "test1" },
      { label: "test2", value: "test2" },
      { label: "test3", value: "test3" },
      { label: "test4", value: "test4" },
      { label: "test5", value: "test5" },
      { label: "test6", value: "test6" },
      { label: "test7", value: "test7" },
      { label: "test8", value: "test8" }
    ]
  }
  static getIcons(lang: IKeys) {
    return [
      {

        icon: "bell",
        size: 24,

      },
      {

        icon: "cog",
        size: 24,

      },
      {

        icon: "user-circle",
        size: 24,

      }
    ]
  }

  static getOptionsList(lang: IKeys) {
    return [
      {
        selectOption: [
          {
            label: lang.default,
            value: "fr"
          },
          {
            label: lang.ar,
            value: "ar"
          },
          {
            label: lang.en,
            value: "en"
          },
        ],
        selectValue: ["fr", "ar", "en"],
        containerClassName: "langcontainer",
        className: "lange",
        onChangeSelect: Function
      }
    ]
  }
  static getItems(lang: IKeys) {
    return [
      {
        isLeftSecondaryIcon: true,
        icon: "chart-pie",
        label: lang.dashboard,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "identification",
        path: "/users",
        label: lang.users,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "user-circle",
        label: lang.prospects,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "users",
        label: lang.contacts,
        path: "/contacts"

      },
      {
        isLeftSecondaryIcon: true,
        icon: "office-building",
        label: lang.accounts,
        path: "/comptes"
      },
      {
        isLeftSecondaryIcon: true,
        icon: "briefcase",
        label: lang.business,
      },
      {
        isLeftSecondaryIcon: true,
        icon: "clipboard-check",
        label: lang.tasks,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "user-group",
        label: lang.meetings,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "phone",
        label: lang.calls,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "speakerphone",
        label: lang.compagnes,

      },
      {
        isLeftSecondaryIcon: true,
        icon: "newspaper",
        label: lang.reports,
      },
      {
        isLeftSecondaryIcon: true,
        icon: "server",
        label: lang.archive,
      },
    ]
  }
  static getHeaderContact(lang: IKeys, changeCol: Function) {
    return [

      {
        key: "fullName",
        label: lang.fullName,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "phone",
        label: lang.phone,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "position",
        label: lang.position,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "email",
        label: lang.email,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "linkedin",
        label: lang.linkedin,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "language",
        label: lang.language,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "contactManager",
        label: lang.manager,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "account",
        label: lang.accountName,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "address",
        label: lang.address,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "country",
        label: lang.country,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "city",
        label: lang.city,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "postalcode",
        label: lang.postalCode,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "action",
        label: ""
      }
    ]
  }

  static getHeaderUser(lang: IKeys, changeCol: Function) {
    return [
      {
        key: "name",
        label: lang.user,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "identifier",
        label: lang.identifiant,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "email",
        label: lang.email,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "access",
        label: lang.access,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar",
        isStatus: true
      },
      {
        key: "role",
        label: lang.role,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "created_at",
        label: lang.creation,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar",
        isDate: true,
      },
      {
        key: "lastConnexion",
        label: lang.lastConnexion,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar",
        isDate: true,
      },
      {
        key: "status",
        label: lang.state,
        isSort: true,
        isStatus: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "action",
        label: ""
      }
    ]
  }
  static getHeaderCompany(lang: IKeys, changeCol: Function) {
    return [
      {
        key: "name",
        label: lang.companyName,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "phone",
        label: lang.phone,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "website",
        label: lang.webSite,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "email",
        label: lang.email,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "linkedin",
        label: lang.linkedin,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "language",
        label: lang.language,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "accountManager",
        label: lang.manager,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "address",
        label: lang.address,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "country",
        label: lang.country,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "city",
        label: lang.city,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "postalcode",
        label: lang.postalCode,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "industry",
        label: lang.sector,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "activities",
        label: lang.activity,
        isSort: false,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "subsidiary",
        label: lang.subsidiary,
        isSort: true,
        withAvatar: false,
        avatarDataKey: "avatar"
      },
      {
        key: "action",
        label: ""
      },


    ]
  }
}

export { Data }
