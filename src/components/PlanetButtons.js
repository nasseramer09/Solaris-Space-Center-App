import React from 'react';

const PlanetButtons = () => {
  const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
  ];

  return (
    <div>
      <h2>Planets</h2>
      <div className="planet-buttons">
        {planets.map(planet => (
          <button key={planet}>{planet}</button>
        ))}
      </div>
    </div>
  );
};

export default PlanetButtons;