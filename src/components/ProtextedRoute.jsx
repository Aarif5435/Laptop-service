import { Navigate } from "react-router-dom";

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {

    if(user == "admin"){
        return <Navigate to="/"/>
    }
    return children;
};
