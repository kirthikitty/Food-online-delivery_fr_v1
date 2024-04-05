import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Delete() {
    const [menuitems, setmenuitems] = useState([]);
    const { menuitemid } = useParams();

    useEffect(() => {
        loadmenuitems();
    }, []);

    const loadmenuitems = async () => {
        try {
            const response = await axios.get("http://localhost:8080/menuitems");
            setmenuitems(response.data);
        } catch (error) {
            console.error("Error loading menu items:", error);
        }
    };

    const deletemenuitem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/menuitems/delete/${menuitemid}`);
            // Assuming you want to reload the menu items after deletion
            loadmenuitems();
        } catch (error) {
            console.error("Error deleting menu item:", error);
        }
    };

    return (
        <div>
            <h1>Delete Menu Item</h1>
            <ul>
                {menuitems.map(menuitem => (
                    <li key={menuitem.id}>
                        {menuitem.menuname} - {menuitem.menudesc}
                        <button onClick={() => deletemenuitem(menuitem.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}
