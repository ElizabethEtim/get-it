import { useState } from "react";
//import { Squash as hamburger } from "hamburger-react";
import { FaBars } from 'react-icons/fa';
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
                    <p className="cat">
                        <button
                            type="button"
                            className="close-menu"
                            aria-label="Close categories menu"
                            onClick={() => setIsOpen(false)}
                        >
                            X
                        </button>
                        Categories
                    </p>
                    <li>Rent an Apartment
                        {/*<li>Selfcon</li>
                        <li>One Bedroom</li>
                        <li>Two Bedroom </li>*/}
                    </li>
                    <li>Rent an Item</li>
                    <li>Find a Service</li>
                    <li>Land Purchase</li>
                    <li>House Purchase</li>
                    <li>Furniture Purchase</li>
                    <li>Item Purchase</li>
                    <li>Fairly Used</li>
                    <li>Nice Treat</li>
                    <div className="info"><li>
                        About Us
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