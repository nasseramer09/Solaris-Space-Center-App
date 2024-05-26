import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import './styles/PlanetPage.css';
import PlanetType from '../model/planetType.ts';
import Planet from "../components/Planet.tsx";
import PlanetDetails from "../components/PlanetDetails.tsx";

type Props = {
    planets: PlanetType[]
}


function PlanetPage({planets}: Props) {
    const [planet, setPlanet] = useState<PlanetType>();
    const {name} = useParams();

    useEffect(() => {
        if (typeof name !== 'undefined') {
            const activePlanet = planets.find(p => p.name === name);
            setPlanet(activePlanet);
        }
    }, [name]);

    return (

        <section>
            <section className="back-button">
                <Link to="/" className="home-link">&lt;&lt; Back</Link>
            </section>
            <section className="planet-page">
                {planet && <Planet planet={planet}/>}
                {planet && <PlanetDetails planet={planet}/>}
            </section>
        </section>
    );
}

export default PlanetPage;