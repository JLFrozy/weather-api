# Weather API

Une API REST simple pour récupérer les données météorologiques en utilisant l'API OpenWeather.

## 🚀 Installation

1. Clonez ce dépôt :
```bash
git clone <url-du-repo>
cd weather-api
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
   - Copiez le fichier `.env.example` vers `.env`
   - Ajoutez votre clé API OpenWeather dans le fichier `.env`

```bash
cp .env.example .env
```

Puis éditez `.env` :
```
PORT=3000
OPENWEATHER_API_KEY=votre_clé_api_ici
```

## 📝 Obtenir une clé API OpenWeather

1. Créez un compte sur [OpenWeather](https://openweathermap.org/)
2. Allez dans la section API Keys
3. Copiez votre clé API et ajoutez-la dans le fichier `.env`

## 🏃 Utilisation

Démarrez le serveur :
```bash
node app.js
```

Le serveur démarre sur `http://localhost:3000`

## 📡 Endpoints

### GET /api/weather/:city

Récupère les données météorologiques pour une ville donnée.

**Exemple :**
```bash
curl http://localhost:3000/api/weather/Paris
```

## 🛠️ Technologies

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Axios** - Client HTTP
- **dotenv** - Gestion des variables d'environnement
- **CORS** - Gestion des requêtes cross-origin

## 📦 Structure du projet

```
weather-api/
├── app.js                 # Point d'entrée de l'application
├── controllers/           # Contrôleurs
│   └── weatherController.js
├── routes/               # Routes de l'API
│   └── weather.js
├── utils/                # Utilitaires
│   └── weatherService.js
├── .env                  # Variables d'environnement (non versionné)
├── .env.example          # Template des variables d'environnement
├── .gitignore           # Fichiers à ignorer par Git
└── package.json         # Dépendances du projet
```

## 📄 Licence

ISC
