import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

// The BASE component of the web app the loads the navbar and footer and 
// uses an Outlet to render the different client side routes

const Base = () => {

    // this method will render the home page on load
    const navigate = useNavigate();
    useEffect(() => {
        // Programmatically navigate to the /home path when the component mounts
        navigate('/home')
    }, [navigate]);   // dependency array ensures this method runs only once


    return (
        <>  
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Base