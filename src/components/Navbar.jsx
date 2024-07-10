import { useEffect, useState } from "react";
import './styles/navbar.css';
import { NavLink } from "react-router-dom";



const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

    // function to toggle the mobile burger menu @ certain media query
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // function to set Navbar to sticky when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsNavbarSticky(true);
            } else {
                setIsNavbarSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={`navbar ${isNavbarSticky ? 'sticky' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="container">
                <div className={`brand-name ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/home">TravelBLOG</NavLink>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile' : '' } ${isNavbarSticky ? 'sticky' : ''}`}>
                    <NavLink to="/home" exact activeClassName="active" onClick={toggleMobileMenu}>
                        HOME
                    </NavLink>
                    <NavLink to="/posts" activeClassName="active" onClick={toggleMobileMenu}>
                        POSTS
                    </NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={toggleMobileMenu}>
                        ABOUT
                    </NavLink>
                </div>
                <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''} ${isNavbarSticky ? 'sticky' : ''}`} onClick={toggleMobileMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div>
                    <div className="admin-site-container">
                        <span className="admin-site-login-text">Admin Login</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;