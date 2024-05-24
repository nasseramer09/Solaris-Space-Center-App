import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlanetButtons from './PlanetButtons';

const HomePage = () => (
  <div>
    <h1>Welcome to Solaris Space Center</h1>
    <p>This is the home page of our app. Start exploring the universe!</p>
    <PlanetButtons /> {/* Include the PlanetButtons component */}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
