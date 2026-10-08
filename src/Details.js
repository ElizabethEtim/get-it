import { useNavigate, useParams } from "react-router-dom";
import properties from "./properties";

const Details = () => {
    const { id } = useParams();

    const item = properties.find((property) => String(property.id) === id);
    const error = null;
    const isPending = false;
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/items/' + item.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="details-page">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { item && (
                <article>
                    <div className="details-image">
                        <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.category}</p><br />
                            <h4>{item.price}</h4>
                    </div>
                    <div className="location">{ item.location }</div>
                    <div className="digits">{ item.contact }</div> <br /><br />
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            {!item && <p className="listing-not-found">Listing not found.</p>}
        </div>
     );
}
 
export default Details;