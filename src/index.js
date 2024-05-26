import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import PlanetButtons from './components/PlanetButtons';
import FavoritesPage from './pages/FavoritesPage';
import NavBar from './components/NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </BrowserRouter>
);

const HomePage = () => (
  <div>
    <h1>Welcome to Solaris Space Center</h1>
    <p>This is the home page of our app. hop on to the rocketship</p>
    <PlanetButtons /> {/* Include the PlanetButtons component */}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
