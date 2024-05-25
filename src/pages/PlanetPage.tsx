import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/PlanetPage.css';
import  {Planet} from '../model/Planet';
import  PlanetDetails from '../components/PlanetDetails';


interface Props {
  addFavorite: (bodyName: string) => void;
  removeFavorite: (bodyName: string) => void;
  favorites: string[];
}

const PlanetPage: React.FC<Props> = ({ addFavorite, removeFavorite, favorites }) => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!name) return;

      try {
        const response = await axios.get(`https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies/${name}`, {
          headers: { 'x-zocom': 'Api-key' }
        });
        setPlanet(response.data);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className={`planet-page ${planet?.name?.toLowerCase()}`}>
      {planet ? (
        <PlanetDetails 
          planet={planet} 
          isFavorite={favorites.includes(planet.name)} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
        />
      ) : (
        <p>Coming Soon!</p>
      )}
    </div>
  );
}

export default PlanetPage;