const { getWeatherByCity, getWeatherByCoordinates } = require('../utils/weatherService');

const getCurrentWeather = async (req, res) => {
    try {
        const { city } = req.query;
        if (!city) {
            return res.status(400).json({ message: 'Veuillez spécifier une ville' });
        }
        const weatherData = await getWeatherByCity(city);
        return res.status(200).json({
            success: true,
            data: weatherData
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

const getWeatherByLocation = async (req, res) => {
    try{
        const { lat, lon} = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ message: 'Veuillez spécifier des coordonnées' });
        }
        const weatherData = await getWeatherByCoordinates(lat, lon);
        res.status(200).json({
            success: true,
            data: weatherData
        })
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const compareWeather = async (req, res) => {
    try{
        const {cities} = req.body;
        if (!cities || cities.length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Envoie un tableau "cities" avec au moins 2 villes'
            });
        }
        const weatherPromises = cities.map(city => getWeatherByCity(city));
        const weatherResults = await Promise.all(weatherPromises);
        
        res.status(200).json({
            success: true,
            data: weatherResults
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    getCurrentWeather,
    getWeatherByLocation,
    compareWeather
};