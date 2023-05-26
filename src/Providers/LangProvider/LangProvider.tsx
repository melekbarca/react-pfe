import { Elang, IKeys, IPageProps } from "../../Interfaces"
import { LangContext, LANG } from "../../Lang/Provider/Provider"
import { useSelector } from "react-redux"
import EN from "../../Lang/En/en"
import AR from "../../Lang/Ar/ar"
import FR from "../../Lang/Fr/fr"
import { RootState } from "../../Interfaces/Redux"
export default function LangProvider(props: IPageProps): JSX.Element {
  const lang = useSelector((state: RootState) => state.setting.lang)
  let type = FR
  if (lang === Elang.en) {
    type = EN
  } else if (Elang.ar === lang) {
    type = AR
  }
  return <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
}
