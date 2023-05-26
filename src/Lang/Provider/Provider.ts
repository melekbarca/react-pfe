import React from "react"
import langFr from "../Fr/fr"
import langEn from "../En/en"
import langAr from "../Ar/ar"
import { IKeys } from "../../Interfaces"
const LANG = {
  fr: langFr,
  en: langEn,
  ar: langAr
}
const LangContext = React.createContext<IKeys>(langFr)
export { LANG, LangContext }
