import { Navbar, Sidebar, Text } from "@piximind/ds-p-23"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { SidebarType } from "@piximind/ds-p-23/lib/esn/Interfaces/Organisms/IOrganismSidebar/IOrganismSidebar"
import { RootState } from "../../Interfaces/Redux"
import { useContext, useState } from "react"
import { LangContext } from "../../Lang/Provider/Provider"
import { Data } from "../../Common"
import { resetToken, setLang } from "../../Redux/Reducers"
import logo from "../../Common/Images/pixicrm_logo.svg"


const PrivateRoute = (): JSX.Element => {
  const lang = useContext(LangContext)

  const showSidebar = useSelector((state: RootState) => state?.sideBar?.show)
  const { height, width } = useSelector((state: RootState) => state?.screen)
  console.log('height', height);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectLang, setselectLang] = useState<string[]>(["fr"])
  const onChangeSelect = (e: any) => {
    setselectLang(e)
    dispatch(setLang(e[0] === "fr" ? "fr" : "en"))
  }
  const option = {
    selectOption: [{ label: "Fr", value: "fr" }, { label: "En", value: "en" }],
    selectValue: selectLang,
    onChangeSelect: (e: any) => { onChangeSelect(e) },
    containerClassName: "",
    className: ''
  }
  const logout = () => {
    dispatch(resetToken())
    navigate('/login')
  }
  return (
    <div style={{ width: width, height: height }} className="ds-w-100 ds-flex-col">
      <div className="ds-w-100 ds-h-100 ds-flex-col">
        <Sidebar
          logo={logo}
          type={SidebarType.type1}
          items={Data.getItems(lang)}
          buttonText="Menu"
          containerClassName="CustomSidebar " />
        <div className="Outlet ">
          <Navbar
            withIcon
            icons={Data.getIcons(lang)}
            withOptionsList
            optionsClassName="lang"
            optionsList={option}
            withButton={false}
            btnText={lang.logOut}
            onClick={logout}
            className={"ds-box-shadow2 mail-navbar ds-hp-60 custom-navbar"}
          />
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default PrivateRoute
