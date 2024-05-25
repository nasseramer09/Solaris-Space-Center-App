import React from 'react';
import { Planet } from '../model/Planet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/PlanetDetails.css';

type Props = {
  planet: Planet;
  isFavorite: boolean;
  addFavorite: (planetName: string) => void;
  removeFavorite: (planetName: string) => void;
};

const PlanetDetails: React.FC<Props> = ({ planet, isFavorite, addFavorite, removeFavorite }) => {
  return (
    <div className={`planet-details ${planet.name.toLowerCase()}`}>
      <div className="planet-header">
        <div
          className="planet-action-icon"
          onClick={() => (isFavorite ? removeFavorite(planet.name) : addFavorite(planet.name))}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeartBroken : faHeart} />
        </div>
      </div>
      <div className="planet-name-container">
        <h1>{planet.name}</h1>
      </div>
      <div className="planet-description">
        <p>{planet.description}</p>
        <br />
        <p>Moons: {planet.moons.join(', ')}</p>
      </div>
      <div className="planet-info">
        <div className="planet-info-item">
          <span className="planet-info-label">Name of the Planet:</span>
          <span className="planet-info-value">{planet.name}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Diameter of the Planet:</span>
          <span className="planet-info-value">{planet.diameter}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Orbital Period around Sun:</span> {}
          <span className="planet-info-value">{planet.orbitalPeriod}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Average Day Temperature:</span>
          <span className="planet-info-value">{planet.temp.day}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Average Night Temperature:</span>
          <span className="planet-info-value">{planet.temp.night}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Average Distance from Sun:</span>
          <span className="planet-info-value">{planet.distance}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Number of moons:</span>
          <span className="planet-info-value">{planet.moons}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;