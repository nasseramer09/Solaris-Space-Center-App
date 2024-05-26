import './styles/HomePage.css';
import PlanetType from "../model/planetType.ts";
import PlanetList from "../components/PlanetList.tsx";
import {Link} from "react-router-dom";

type Props = {
    planets: PlanetType[]
}

function HomePage({planets}: Props) {
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
                <PlanetList planets={planets}/>
            </div>
        </div>
    );
}

export default HomePage;