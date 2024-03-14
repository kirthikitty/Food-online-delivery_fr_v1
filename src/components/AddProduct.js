import { useState } from "react";


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
        menuprice: ""
        
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

{selectedImage && (
  <div>
    <img
      alt="not found"
      width={"250px"}
      src={URL.createObjectURL(selectedImage)}
    />
    <br />
    <button onClick={() => setSelectedImage(null)}>Remove</button>
    <button onClick={() => handleFile()}>Upload</button>
  </div>
)}
           <h1>Add a Product</h1>
           Name: <input type="text" name="menuname" value={data1.menuname} onChange={dataGiven} /> <br></br>
           Description : <input type="text" name="menudesc" value={data1.menudesc} onChange={dataGiven} /> <br></br>
           Price : <input type="text" name="menuprice" value={data1.menuprice} onChange={dataGiven} /> <br></br>
           <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
           <input type="button" value="AddProduct" onClick={submitProduct} />
        </div>
    );
}

export default AddProduct;