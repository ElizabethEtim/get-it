import { Link } from 'react-router-dom';
import logo from './Assets/logo.png'
import MenuDropDown from './Menu';


const Navbar = () => {
return ( 
        <nav className="navbar">
            <div className="menu-container">
                <MenuDropDown />
            </div>
            <img src={logo} alt="logo" className="logo"/>
            <h2>
                <Link to="/">Home</Link>
                <Link to="/Post" >Post</Link>
            </h2>
        </nav>
     );
    }

    export default Navbar
