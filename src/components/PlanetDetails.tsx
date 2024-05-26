import PlanetType from '../model/planetType.ts';

type Props = {
    planet: PlanetType
};

function PlanetDetails({planet}: Props) {
    return (
        <div className={`${planet.name.toLowerCase()}` + "-info"}>
            <fieldset>
                <legend>{planet.name}</legend>

                <table width="100%">
                    <tr>
                        <td><h2>Detaljer</h2></td>
                        <td><h2>Manar</h2></td>
                    </tr>
                    <tr>
                        <td>Typ: {planet.type}</td>
                        <td>{planet.moons.length}</td>
                    </tr>
                    <tr>
                        <td>Omkrets: {planet.diameter}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Distans fran solen: {planet.distance}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Omloppstid: {planet.orbitalPeriod}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Dagstemperatur: {planet.temp.day}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Nattemperatur: {planet.temp.night}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mass: {planet.mass}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gravity: {planet.gravity}</td>
                        <td></td>
                    </tr>
                </table>
                <hr/>
                <table>
                    <tr>
                        <td>
                            {planet.description}
                        </td>
                    </tr>
                </table>
            </fieldset>
            {/*<div className="planet-header">*/}
            {/*</div>*/}
            {/*<div className="planet-name-container">*/}
            {/*  <h1>{planet.name}</h1>*/}
            {/*</div>*/}
            {/*<div className="planet-description">*/}
            {/*  <p>{planet.description}</p>*/}
            {/*  <br/>*/}
            {/*  <p>Moons: {planet.moons.join(', ')}</p>*/}
            {/*</div>*/}
            {/*<div className="planet-info">*/}
            {/*  <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Diameter:</span>*/}
            {/*      <span className="planet-info-value">{planet.diameter} km</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Mass:</span>*/}
            {/*      <span className="planet-info-value">{planet.mass} kg</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Gravity:</span>*/}
            {/*      <span className="planet-info-value">{planet.gravity} m/s²</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Orbital Period:</span>*/}
            {/*      <span className="planet-info-value">{planet.orbitalPeriod} days</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Day Temperature:</span>*/}
            {/*      <span className="planet-info-value">{planet.temp.day} °C</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Night Temperature:</span>*/}
            {/*      <span className="planet-info-value">{planet.temp.night} °C</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Distance from Sun:</span>*/}
            {/*      <span className="planet-info-value">{planet.distance} km</span>*/}
            {/*    </div>*/}
            {/*    <div className="planet-info-item">*/}
            {/*      <span className="planet-info-label">Moons:</span>*/}
            {/*      <span className="planet-info-value">{planet.moons.length}</span>*/}
            {/*    </div>*/}
            {/*  </div>*/}
        </div>
    );
}

export default PlanetDetails;