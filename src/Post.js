import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Post = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState("Selfcon");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [isPending, setIsPending] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("contact", contact);

    try {
      await fetch('YOUR_BACKEND_API_URL/items', {
        method: 'POST',
        body: formData
      });
      setIsPending(false);
      navigate('/');
    } catch (error) {
      setIsPending(false);
      console.error("Failed to submit item", error);
    }
  };

  return (
    <div className="post">
      <div className="post-item">Post an item</div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileUpload">Upload an image:</label>
        <input 
          id="fileUpload"
          type="file" 
          accept="image/*" 
          required 
          onChange={(e) => setSelectedImage(e.target.files[0])} 
        />

        <label>Description:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
        />

        <label>Contact:</label>
        <input 
          type="text" 
          required 
          value={contact} 
          onChange={(e) => setContact(e.target.value)} 
        />

        {!isPending && <button type="submit">Post</button>}
        {isPending && <button disabled>Posting...</button>}
      </form>  

      <footer>
        <Link to="/about">
          <p className="about-us">About us</p>
        </Link>
        <Link to="/contact">
          <p className="contact-us">Contact</p>
        </Link>
        <p className="mail">
          <a href="mailto:lizzyetim961@gmail.com">Email</a>
        </p>
        <p className="copy">&copy; {new Date().getFullYear()} Get It. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Post;