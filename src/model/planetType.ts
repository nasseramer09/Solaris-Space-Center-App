type PlanetType = {
    name: string,
    type: string,
    diameter: number,
    mass: number,
    gravity: number,
    orbitalPeriod: number,
    description: string,
    temp: {
        day: number,
        night: number,
    },
    distance: number,
    moons: string[],
}
export default PlanetType;