import { Outlet } from "react-router-dom";

// The BASE component of the web app the loads the navbar and footer and 
// uses an Outlet to render the different client side routes

const Base = () => {

    return (
        <>
            <Outlet />
        </>
    )
}

export default Base