import {Link} from 'react-router-dom';
import PlanetType from "../model/planetType.ts";

type Props = {
    planet: PlanetType
}

function Planet({planet}: Props) {
    return (
        <Link to={`/planet/${planet.name}`}>
            <div className={`body ${planet.name.toLowerCase()}`}>
                <div className={`planet ${planet.name.toLowerCase()}`}>
                    <span className="planet-name">{planet.name}</span>
                </div>
            </div>
        </Link>
    )
}

export default Planet
