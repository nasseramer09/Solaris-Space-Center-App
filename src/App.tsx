import {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import PlanetType from './model/planetType.ts';
import planetsJson from './assets/planets.json';
import PlanetPage from "./pages/PlanetPage.tsx";

function App() {
    const [planets, setPlanets] = useState<PlanetType[]>(planetsJson);
    console.log("planets.length", planets.length);

    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (bodyName: string) => {
        setFavorites([...favorites, bodyName]);
    };

    const removeFavorite = (bodyName: string) => {
        setFavorites(favorites.filter(name => name !== bodyName));
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage planets={planets}/>}/>
                    <Route
                        path="/planet/:name"
                        element={<PlanetPage planets={planets}/>}
                    />
                    <Route path="/favorites" element={<FavoritePage favorites={favorites}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;