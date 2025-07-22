import { Link } from "react-router-dom";



const ItemList = ({items}) => {
    return ( 
        <div className="image-list">
            {items.map(
                (item) =>(
                    <div className="item-preview" key={item.id}>
                        
                            <img src={item.image} alt={item.category} width="200" />
                            <h4>{item.category}</h4>
                            <h4>{item.price}</h4>
                        <Link to= {`items/${item.id}`}>
                        <p className="details">Details...</p>
                        </Link>
                    </div>
                )
            )}
        </div>
     );
}
 
export default ItemList;