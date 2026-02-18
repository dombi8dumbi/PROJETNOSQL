console.log(" ICI C'EST LE BON SERVER.JS =>", __filename);
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger (config robuste)
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));
console.log(" Swagger mounted on /api-docs");

// Route test (pour vérifier que tu touches le bon serveur)
app.get('/ping', (req, res) => res.send('pong'));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    name: "Coworking API",
    status: "running",
    message: "Backend coworking fonctionne",
    docs: "/api-docs"
  });
});

// Connexion MongoDB (ne bloque pas Swagger si Mongo est KO)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté !'))
  .catch(err => console.log(' Erreur MongoDB :', err.message));

// Start server
app.listen(PORT, () => {
  console.log(` Server up and running on port ${PORT}`);
});
