import { Link } from "react-router-dom";
import error from './Assets/error.jpg'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <img src={error} alt="404 Error" className="error"/>
            <p><Link to="/">Back to homepage</Link></p>
        </div>
     );
}
 
export default NotFound;