const axios = require("axios");

const getWeatherByCity = async (city) => {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
        const response = await axios.get(url);
        return {
            ville: response.data.name,
            pays: response.data.sys.country,
            temperature: response.data.main.temp,
            ressenti: response.data.main.feels_like,
            temp_min: response.data.main.temp_min,
            temp_max: response.data.main.temp_max,
            humidite: response.data.main.humidity,
            pression: response.data.main.pressure,
            description: response.data.weather[0].description,
            icone: response.data.weather[0].icon,
            vent: {
                vitesse: response.data.wind.speed,
                direction: response.data.wind.deg
            },
            visibilite: response.data.visibility,
            timestamp: new Date(response.data.dt * 1000)
        };
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};