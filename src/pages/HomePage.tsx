import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const bodies = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  return (
    <div className="home-page">
      <div className="nav-bar">
        <div>
          <a href="/">Home</a>
        </div>
        <div className="center-link">
          <Link to="/favorites">View Favorites</Link>
        </div>
      </div>
      <h1 className="title">Solaris Space Center App</h1>
      <p className="additional-text">For Smartphones, Tablets and Digital Media Players</p>
      <div className="solar-system">
        {bodies.map((body, index) => (
          <Link key={index} to={`/planet/${body.toLowerCase()}`}>
            <div className={`body ${body.toLowerCase()}`}>
              <div className={`planet ${body.toLowerCase()}`}>
                <span className="planet-name">{body}</span>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;