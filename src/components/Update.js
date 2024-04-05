import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar.js';

export function Update() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadImage, setUploadImage] = useState('');
  const navigate = useNavigate();
  const { menuitemid } = useParams();
  const [menuitem, setMenuItem] = useState({
    menuname: "",
    menudesc: "",
    menuprice: "",
    image: "",
    categoryname: ""
  });

  const { menuname, menudesc, menuprice, image, categoryname } = menuitem;

  useEffect(() => {
    loadMenuItems();
    loadCategories(); 
  }, []);

  const loadMenuItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/menuitems/updatemenuitem/${menuitemid}`);
      setMenuItem(response.data);
      setSelectedCategory(response.data.categoryname); 
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await axios.post("http://localhost:8080/file/upload", formData);
      setUploadImage(response.data);
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuitem, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedMenuItem = { ...menuitem, image: uploadImage, categoryname: selectedCategory };
    try {
      await axios.put(`http://localhost:8080/menuitems/updatemenuitem/${menuitemid}`, updatedMenuItem);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div>
      <Navbar />
    <br></br>
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', backgroundColor: '#dc143c', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <form onSubmit={(e) => onSubmit(e)}>
      <p>
        <label htmlFor="menuname" style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Product Name:</label>
        <input type='text' id="menuname" placeholder='Enter product name' name='menuname' value={menuname} onChange={(e) => onInputChange(e)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </p>
      <p>
        <label htmlFor="menudesc" style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Description:</label>
        <input type='text' id="menudesc" placeholder='Enter description' name='menudesc' value={menudesc} onChange={(e) => onInputChange(e)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </p>
      <p>
        <label htmlFor="menuprice" style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Price:</label>
        <input type='number' id="menuprice" placeholder='Enter price' name='menuprice' value={menuprice} onChange={(e) => onInputChange(e)} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </p>
      <p>
        <label htmlFor="category" style={{ marginBottom: '5px', display: 'block', color: '#333' }}>Category Name:</label>
        <select id="category" value={selectedCategory} onChange={handleSelectChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="">Select category...</option>
          <option>Veg</option>
          <option>Non-Veg</option>
          {categories.map(category => (
            <option key={category.menuitemid} value={category.categoryname}>
              {category.categoryname}
            </option>
          ))}
        </select>
      </p>
      {image && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={image} alt="menuitems" style={{ width: "250px", borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        </div>
      )}
      <p>
        <input type="file" name="myImage" onChange={(event) => setSelectedImage(event.target.files[0])} style={{ marginBottom: '10px' }} />
        <button type="button" onClick={handleFile} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Upload Image</button>
      </p>
      <p>
        <button type="submit" className="btn btn-outline-primary" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Submit</button>
        <Link className="btn btn-outline-primary" to="/admin" style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</Link>
      </p>
    </form>
  </div>
  </div>
  );
}
export default Update;
