
# Simple App

This repository contains a simple application with both frontend and backend components.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [File Structure](#file-structure)

## Installation

### Frontend

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

### Backend

Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
npm install
```

## Running the Application

### Frontend

To start the frontend development server, run:

```bash
npm run dev
```

### Backend

To start the backend server, run:

```bash
npm start
```

## File Structure

```
/frontend
  /src
    /components
      ItemList.jsx
    App.jsx
    index.css
    index.jsx
  package.json
/backend
  /routes
    items.js
  /data
    data.json
  server.js
  package.json
```

### Frontend

#### `ItemList.jsx`

```javascript
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
```

#### `App.jsx`

```javascript
import React from 'react';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  return (
      <div>
          <ItemList />
      </div>
  );
};

export default App;
```

#### `index.jsx`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### `index.css`

```css
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 80%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #007bff;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

li:last-child {
    border-bottom: none;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f9f9f9;
    margin: 5px 0;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.item:hover {
    background-color: #f1f1f1;
}

.button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}
```

### Backend

#### `server.js`

```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const itemsRouter = require('./routes/items');
require('dotenv').config()
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api', itemsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

#### `routes/items.js`

```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data/data.json');

router.get('/items', (req, res) => {
    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data file.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
```

#### `data/data.json`

```json
[
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" },
    { "id": 3, "name": "Item 3" }
]
```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
```
