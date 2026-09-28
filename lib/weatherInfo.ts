export async function getWeatherData(lat: number, lon: number) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
        );
        const data = await response.json();
        return data?.weather[0];
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
    }
}


export const getTemperatureData = async (lat: number, lon: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
        );
        const data = await response.json();
        return data?.main
    } catch (e) {
        if(e instanceof Error)
        console.log(e.message);
    }
};
export const getWindData = async (lat: number, lon: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
        );
        const data = await response.json();
        return data?.wind
    } catch (e) {
        if(e instanceof Error)
        console.log(e.message);
    }
};
export const getAQIData = async (lat: number, lon: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/4.0/onecall/timeline/1day?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`,
        );
        const data = await response.json();
        return data?.list[0]
    } catch (e) {
        if(e instanceof Error)
        console.log(e.message);
    }
};