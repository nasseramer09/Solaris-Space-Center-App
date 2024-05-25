import React from 'react';
import './styles/FavoritePage.css';

interface Props {
  favorites: string[];
}

const FavoritePage: React.FC<Props> = ({ favorites }) => {
  return (
    <div className="favorite-page">
      <div className="coming-soon">Coming soon...</div>
      <div className="favorites-container">
        {favorites.length > 0 && (
          <ul>
            {favorites.map((favorite, index) => (
              <li key={index}>{favorite}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;