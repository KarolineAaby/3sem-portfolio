import { useState } from "react";
import {NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav>
            <NavLink to="/" end>
                <img src={require('../media/logo.svg').default} alt="Logo" />
            </NavLink>
            <ul className={isMobile ? "navlinks-mobile" : "navlinks"}
            onClick={() => setIsMobile(false)}
            >
                <NavHashLink className="underline" smooth to="/#kompetencer">Kompentencer</NavHashLink>
                <NavHashLink className="underline" smooth to="/#projekter">Projekter</NavHashLink>
                <NavLink className="underline" to="/om">Om mig</NavLink>
                <NavHashLink smooth to="#footer" className="navLinks-kontakt">Kontakt</NavHashLink>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                   <i className="fas fa-times"></i>
                ) : (
                   <i className="fas fa-bars"></i>
                ) }
            </button> 
        </nav>
    );
}