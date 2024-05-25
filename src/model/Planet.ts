export interface Planet {
    name: string;
    diameter: number;
    mass: number;
    gravity: number; 
    orbitalPeriod: number;
    description: string;
    temp: {
        day: number;
        night: number;
    };
    distance: number;
    moons: string[];
  }