import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ access, redirectPath = "/" }) => {
    if (access) {
        return <Outlet />;
    }
    return <Navigate to={redirectPath} />;

}


export default ProtectedRoute;
