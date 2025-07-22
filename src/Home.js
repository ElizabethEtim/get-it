import ItemList from "./Itemlist";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";

const Home = () => {
    const{ data: items, isPending, error} = useFetch('http://localhost:8000/items')
    return ( <div className="home">
            <div className="background-image">
                Modern Property Management <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Landlords, 
                <br /> Property Managers And Renters.
            </div>
            <p className="find"> Find what best suits you</p>
            <p className="take">
                Take a deep dive and browse homes and items for sale and rent. Explore your needs
                <br />and find what's right for you!
            </p>
            <div>
                {error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                {items &&<ItemList items={items}/>}
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
            &copy; 2025 Get It. All rights reserved.
        </p>
                </footer>
        </div>
     );
}
//npx json-server --watch data/db.json --port 8000
 
export default Home;