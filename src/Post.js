import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const Post = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [isPending, setIsPending] = useState(false);
  const imageInputRef = useRef(null);
  
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image?.type.startsWith("image/")) setSelectedImage(image);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const image = e.dataTransfer.files[0];
    if (image?.type.startsWith("image/")) {
      const transfer = new DataTransfer();
      transfer.items.add(image);
      imageInputRef.current.files = transfer.files;
      setSelectedImage(image);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("title", title);
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
    <div className="post-page">
      <div className="post">
        <div className="post-item">Post an item</div>

        <form onSubmit={handleSubmit}>
        <label
          className="upload-zone"
          htmlFor="fileUpload"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
        >
          <input
            id="fileUpload"
            ref={imageInputRef}
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
          />
          <FaCamera className="upload-icon" aria-hidden="true" />
          <span className="upload-title">
            {selectedImage ? selectedImage.name : "Add a photo"}
          </span>
          <span className="upload-hint">Click or drag an image here</span>
        </label>

        <div className="form-field">
          <label htmlFor="title">Title</label>
          <select id="title" value={title} onChange={(e) => setTitle(e.target.value)} required>
              <option value="" disabled>Select a property type</option>
              <option value="One-bedroom Apartment">One-bedroom Apartment</option>
              <option value="Two-bedroom Apartment">Two-bedroom Apartment</option>
              <option value="Three-bedroom Apartment">Three-bedroom Apartment</option>
              <option value="Selfcon Apartment">Selfcon Apartment</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Single Room">Single Room</option>
            </select>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="category">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="" disabled>Select a category</option>
              <option value="Rent an Apartment">Rent an Apartment</option>
              <option value="Rent an Item">Rent an Item</option>
              <option value="Find a Service">Find a Service</option>
              <option value="Land Purchase">Land Purchase</option>
              <option value="House Purchase">House Purchase</option>
              <option value="Furniture Purchase">Furniture Purchase</option>
              <option value="Item Purchase">Item Purchase</option>
              <option value="Fairly Used">Fairly Used</option>
              <option value="Nice Treat">Nice Treat</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="location">Location/Description</label>
          <textarea
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact">Contact</label>
          <input
            id="contact"
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

          {!isPending && <button type="submit">Post</button>}
          {isPending && <button disabled>Posting...</button>}
        </form>
      </div>

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