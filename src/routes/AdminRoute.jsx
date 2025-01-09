/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (loading || isAdminLoading) {
        return "Loading..."
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={location.pathname}></Navigate>
};

export default AdminRoute;