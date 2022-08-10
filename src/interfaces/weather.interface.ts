export interface Weather {
    name: string,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_min: number,
    }
    weather: [
        {
            description: string;
        }
    ]
    wind: {
        speed: number;
    }
    visibility: number;
}