import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// The BASE component of the web app the loads the navbar and footer and 
// uses an Outlet to render the different client side routes

const Base = () => {

    return (
        <>  
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Base