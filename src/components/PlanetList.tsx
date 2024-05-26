import PlanetType from "../model/planetType.ts";
import Planet from "./Planet.tsx";


type Props = {
    planets: PlanetType[]
}

function PlanetList({planets}: Props) {
    return (
        <section className="solar-system2">
            {planets.map(planet => {
                return <Planet planet={planet} key={planet.name}/>
            })}
        </section>
    )
}

export default PlanetList
