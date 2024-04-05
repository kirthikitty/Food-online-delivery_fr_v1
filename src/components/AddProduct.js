import { useState } from "react";
import Navbar from '../components/Navbar.js';

export function AddProduct(){

    const [selectedImage, setSelectedImage] = useState(null);
    const [sendImage, setsendImage] = useState(null);

  const handleFile = () => {
    console.log("hello world")
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://localhost:8080/file/upload", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)
        setsendImage(text)
    })
  }
    const[data1, setData] = useState({
        menuname: "",
        menudesc: "",
        menuprice: "",
        categoryname: ""
        
    });
    const dataGiven =  (e) => {
        const {name, value} = e.target;
        setData({...data1, [name]:value})
        console.log(name, value)
    }
    const submitProduct = (e) => {
        const Addproduct = {
            menuname: data1.menuname,
            menudesc: data1.menudesc,
            menuprice: data1.menuprice,
            categoryname: data1.categoryname,
            image : sendImage
        }
        console.log(AddProduct)
        fetch("http://localhost:8080/menuitems/addmenu", {
            headers:{
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(Addproduct)
        }).then(response => {
            console.log("Data Received " + response)
        })

    }
    return (
<div>
  <Navbar />
  <br></br>
  <br></br>
  
<div className="fixed" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: 'auto', backgroundColor: '#dc143c', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Add a Product</h1>

  {selectedImage && (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img
        alt="Selected Image"
        style={{ maxWidth: '250px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
        src={URL.createObjectURL(selectedImage)}
      />
      <br />
      <button onClick={() => setSelectedImage(null)} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#FF6347', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove Image</button>
      <button onClick={() => handleFile()} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Upload Image</button>
    </div>
  )}

  <form>
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="menuname" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Name:</label>
      <input type="text" id="menuname" name="menuname" value={data1.menuname} onChange={dataGiven} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="menudesc" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Description:</label>
      <input type="text" id="menudesc" name="menudesc" value={data1.menudesc} onChange={dataGiven} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="menuprice" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Price:</label>
      <input type="text" id="menuprice" name="menuprice" value={data1.menuprice} onChange={dataGiven} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="myImage" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Select Image:</label>
      <input type="file" id="myImage" name="myImage" onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
    </div>

    <div style={{ textAlign: 'center' }}>
      <input type="button" value="Add Product" onClick={submitProduct} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
    </div>
  </form>
</div>
</div>
    )


}

export default AddProduct;