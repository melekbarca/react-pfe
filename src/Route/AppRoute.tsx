import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import PublicRoute from "./PublicRoute/PublicRoute"
import LangProvider from "../Providers/LangProvider/LangProvider"
import { useUpdateEffect, useWindowSize } from "@piximind/custom-hook"
import { RootState } from "../Interfaces/Redux"
import { setScreen } from "../Redux/Reducers"
import { AddCompte, Compte, ForgetPass, Login, PageTest, Register, ResetPass } from "../Pages"
import ModalProvider from "../Providers/ModalProvider/ModalProvider"
import { ToastContainer } from 'react-toastify';
import Users from "../Pages/Users/Users"
import AddUser from "../Pages/Users/AddUser"
import Contact from "../Pages/Contact/Contact"
import AddContact from "../Pages/Contact/AddContact"
import UpdateAccount from "../Pages/Compte/UpdateAccount"
import UpdateUser from "../Pages/Users/UpdateUser"

const AppRoute = (): JSX.Element => {
  const auth = useSelector((state: RootState) => state?.auth)
  const { width, height } = useWindowSize()
  const dispatch = useDispatch()
  useUpdateEffect(() => {
    dispatch(setScreen({ width, height }))
  }, [width, height])
  function PrivateRouteRender(props: any) {
    return auth?.accessToken === "" && auth?.refreshToken === "" && auth?.user === null ? (
      <Navigate to="/login" />
    ) : (
      props.children
    )
  }
  function PublicRouteRender(props: any) {
    return !auth?.accessToken && !auth?.refreshToken && !auth?.user ? (
      props.children
    ) : (
      <Navigate to="/" />
    )
  }
  return (
    <LangProvider>
      <ModalProvider />
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
        <Routes>
          <Route
            element={
              <PublicRouteRender>
                <PublicRoute />
              </PublicRouteRender>
            }
          >

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPass" element={<ForgetPass />} />
            <Route path="/resetPass/:token" element={<ResetPass />} />
          </Route>

          <Route
            element={
              <PrivateRouteRender>
                <PrivateRoute />
              </PrivateRouteRender>
            }
          >
            <Route path="/" element={<PageTest />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/addUser" element={<AddUser />} />
            <Route path="/users/updateUser/:id" element={<UpdateUser />} />
            <Route path="/users/deleteUser/:id" element={<Users />} />
            <Route path="/comptes" element={<Compte />} />
            <Route path="/compte/addCompte" element={<AddCompte />} />
            <Route path="/account/updateAccount" element={<UpdateAccount />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/contacts/addContact" element={<AddContact />} />
            <Route path="/hii" element={<Login />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}

export default AppRoute
