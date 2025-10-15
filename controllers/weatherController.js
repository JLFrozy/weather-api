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
        const weatherData = await weatherService.getWeatherByCoordinates(lat, lon);
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

