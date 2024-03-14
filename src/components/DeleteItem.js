
import React, {useState} from 'react';

export const DeleteItem = () => {
    const [formData, setFormData] = useState({
        id: '',
        
       
    });
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value})
        console.log(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
       
        fetch(`http://localhost:8080/menuitems/delete/${formData.id}`)
           
        .then((response)=>{
            if(!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.text();
           })
           .then((data) => {
            console.log("Data Received: " , data);
           })
           .catch((error)=>{
            console.error("Error During fetch", error);
           });
           alert("MenuItem Deleted");
        }
  return (
    
        <div>
            <form>
                <label>Delete Menu Id:</label>
                <input type="text" name="id" value={formData.id} onChange={handleChange}></input><br></br>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    
  )

}
