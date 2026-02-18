const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API docs',
      version: '1.0.0',
      description: 'Documentation interactive des modules',
    },
    servers: [
      // Mets le bon lien Render (chez toi c'est j1sp)
      { url: 'https://projetnosql-j1sp.onrender.com/' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Reservation: {
          type: 'object',
          required: ['nom'],
          properties: {
            nom: { type: 'string', example: 'Reservation du 15 Juillet 2024' },
            description: { type: 'string', example: '' },
            date: { type: 'string', format: 'date-time', example: '2024-07-06T08:30:00Z' },
          },
        },

        Room: {
          type: 'object',
          required: ['Nom', 'Date'],
          properties: {
            id: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            Nom: { type: 'string', example: 'Salle de réunion A' },
            Date: { type: 'string', format: 'date', example: '2025-07-23' },
          },
        },

        User: {
          type: 'object',
          required: ['Nom_user', 'Prenom_user', 'Email_user', 'Mot_de_passe'],
          properties: {
            id: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            Nom_user: { type: 'string', example: 'Doe' },
            Prenom_user: { type: 'string', example: 'John' },
            Telephone_user: { type: 'string', example: '+1234567890' },
            Adresse_user: { type: 'string', example: '123 Main St, Anytown' },
            Email_user: { type: 'string', format: 'email', example: 'john.doe@example.com' },
            Mot_de_passe: { type: 'string', example: 'Abcd1234!' },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },

  apis: [
    './Routes/reservations.js',
    './Routes/room.js',
    './Routes/user.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
