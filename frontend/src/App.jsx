import React from 'react';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Item List</h1>
        <ItemList />
        <div className="info-section">
          <h2>About This Application</h2>
          <p>
            This is a simple application built using React for the frontend and Express for the backend. It demonstrates the usage of various modern web technologies.
          </p>
          <h3>Tech Stack</h3>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a></li>
            <li><a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">Axios</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
          </ul>
          <p>
            Developed by Menoko OG-Original Geek, a passionate full stack web developer and software engineer. You can learn more about Menoko OG and his projects on <a href="https://github.com/MenokoOG" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
