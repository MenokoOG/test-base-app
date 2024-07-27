import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id} className="item">
                        <span>{item.name}</span>
                        <button className="button">Action</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
