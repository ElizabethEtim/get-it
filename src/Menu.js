import { useState } from "react";
//import { Squash as hamburger } from "hamburger-react";
import {FaBars} from 'react-icons/fa';
import './index.css';

const MenuDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return ( 
        <div className="menu-container">
            <div className="menu-icon" onClick={toggleMenu}>
            <FaBars size={20} />
            </div>

            {isOpen && (
                <ul className="dropdown-menu">
                    <p className="cat">Categories</p>
                    <li>Rent a house
                        {/*<li>Selcon</li>
                        <li>One Bedroom</li>
                        <li>Two Bedroom </li>*/}
                    </li>
                    <li>Rent an item</li>
                    <li>Find a service</li>
                    <li>Land purchase</li>
                    <li>House purchase</li>
                    <li>Furniture purchase</li>
                    <li>Fairly used</li>
                    <li>Nice treat</li>
                    <div className="info"><li>
                        About us
                    </li>
                    <li>
                        Contact
                    </li></div>
                    

                </ul>
            )}
        </div>
     );
}
 
export default MenuDropDown;