import ItemList from "./Itemlist";
import properties from "./properties";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const items = properties.filter((item) =>
        [item.title, item.location, item.category].some((value) =>
            value.toLowerCase().includes(normalizedSearchTerm)
        )
    );
    const isPending = false;
    const error = null;
    return ( <div className="home">
            <div className="background-image">
                Modern Property Management For  
                <br /> Landlords,Property Managers And Renters.
                <form className="hero-search" onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="One-bedroom Apartment, Marian, Rent an Item"
                        aria-label="Search properties"
                    />
                    <button type="submit" aria-label="Search properties">
                        <FaSearch aria-hidden="true" />
                    </button>
                </form>
            </div>
            <p className="find"> Find what best suits you</p>
            <p className="take">
                Take a deep dive and browse homes and items for sale and rent. Explore your needs
                <br />and find what's right for you!
            </p>
            <div>
                {error && <>{ error }</>}
                { isPending && <div>Loading...</div> }
                {items.length > 0 ? <ItemList items={items}/> : <p className="search-empty">No properties match your search.</p>}
            </div>
            <footer>
                <Link to= {`about`}>
                    <p className="about-us">About us</p>
                </Link>
                <Link to={`contact`}>
                    <p className="contact-us">Contact</p>
                </Link>
                <p className="mail">
                    <a href="mailto:lizzyetim961@gmail.com">Email</a>
                </p>

        <p className="copy">
            &copy; {new Date().getFullYear()} Get It. All Rights Reserved.
        </p>
                </footer>
        </div>
     );
}
//npx json-server --watch data/db.json --port 8000
 
export default Home;