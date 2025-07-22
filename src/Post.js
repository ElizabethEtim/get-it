import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Post = () => {
    const [image, setImage] = useState(``);
    const [category, setCategory] = useState(`Selfcon`);
    const [price, setPrice] = useState(``);
    const [location, setLocation] = useState(``);
    const [contact, setContact] = useState(``);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

//useNavigate to navigate thru history

/*useHistory hook allows to go back n forth thru history just like the arrows n add a new page to history, by
redirecting to another route*/

// e is event object

    const handleSubmit = (e) =>{
        e.preventDefault();
        const item = { image, category, price, location, contact }
/*when using json server for submit, no need to give it an id cos json server automatically add a unique id
 when u make a post request*/  

        setIsPending(true)
        
        fetch('http://localhost:8000/items', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() =>{
            console.log('new item');
            setIsPending(false);
            //navigate(-1);
            navigate('/'); 
        })

//navigate(-1) to go back once in history, navigate(1) to go forward once in history, navigate('/new-path) for specific path

//assynchronous returns a promise, so always add .then method    

    }

    return ( 
        <div className="post">
            <div className="post-item">Post an item</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fileUpload">Upload an image:</label>
                <input 
                type="file" 
                accept="image/*"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <label>Description:</label>
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="Selfcon">Selfcon</option>
                    <option value="1Bedroom apartment">1Bedroom apartment</option>
                    <option value="2Bedroom apartment">2Bedroom apartment</option>
                    <option value="3Bedroom apartment">3Bedroom apartment</option>
                </select>
                <label>Price:</label>
                <input 
                type="text" 
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <label>Location:</label>
                <textarea
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                ></textarea>
                <label>Contact:</label>
                <input 
                type="text" 
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                />
                { !isPending && <button>Post</button>}
                { isPending && <button disabled>Posting...</button>}
            </form>
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

/*to submit a form n get the data, use a submit event which happens when a button inside the form is clicked or
attach a click event to the button itself*/
     );
}
 
export default Post;