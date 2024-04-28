import { Navigate, useLocation } from "react-router-dom";
import UseHooks from "../Hooks/UseHooks";

const PrivateRoute = ({children}) => {
    const {user, loading}= UseHooks()
    const location = useLocation()
    if(loading){
        return <span className="loading flex justify-center items-center loading-lg md:min-h-72 md:min-w-64 loading-infinity"></span>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate> 
};

export default PrivateRoute;