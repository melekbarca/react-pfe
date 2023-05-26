
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../Interfaces/Redux";

const PublicRoute = (): JSX.Element => {
    const { height, width } = useSelector((state: RootState) => state?.screen)
    
    return (
        <div style={{ height: height, width: width }}>
            <Outlet />
        </div>
    )
}

export default PublicRoute