import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";

const Details = () => {
    const { id } = useParams();

/*changable parts of the route is known as the route parameter, its the same page or component but different blog id
( eg- /blogs/123). useParams allow us to grab route parameters from the route*/ 

    const {data: item, error, isPending}  = useFetch('http://localhost:8000/items/' + id);
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/items/' + item.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { item && (
                <article>
                     <div className="commited">Get It is committed to ensuring your needs are satisfied.  We are 
                        continuously working to improve the accessibility of our web experience for everyone,  
                        and we welcome feedback. If you wish to give a feedback or report an issue, 
                        please let us know <a href="mailto:lizzyetim961@gmail.com">Email</a>.
                        </div>
                    <div className="details-image">
                        <img src={item.image} alt={item.category} width="200" />
                            <h4>{item.category}</h4>
                            <h4>{item.price}</h4>
                    </div>
                    <div className="location">{ item.location }</div>
                    <div className="digits">{ item.contact }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            <footer>
                <Link>
                    <p className="about-us">About us</p>
                </Link>
                <Link>
                    <p className="contact-us">Contact</p>
                </Link>
                <p className="mail">
                    <a href="mailto:lizzyetim961@gmail.com">Email</a>
                </p>

        <p className="copy">
            &copy; 2025 Get It. All Rights Reserved.
        </p>
                </footer>
        </div>
     );
}
 
export default Details;