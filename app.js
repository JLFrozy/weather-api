require("dotenv").config();
const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/weather", weatherRoutes);

// Route de base
app.get("/", (req, res) => {
  res.json({
    message: "API Météo personnalisée",
    endpoints: {
      "GET /api/weather/current?city=Paris": "Météo par ville",
      "GET /api/weather/location?lat=45.188&lon=5.724":
        "Météo par coordonnées (Grenoble)",
      "POST /api/weather/compare": "Comparer plusieurs villes",
    },
  });
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route non trouvée",
  });
});

app.listen(PORT, () => {
  console.log(`🌤️  API Météo lancée sur http://localhost:${PORT}`);
});
