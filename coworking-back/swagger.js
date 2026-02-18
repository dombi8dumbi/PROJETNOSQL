const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API docs',
      version: '1.0.0',
      description: 'Documentation interactive des modules',
    },
    servers: [{ url: 'https://projetnosql-j1sp.onrender.com' }],

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
          required: ['nom', 'date'],
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

        Error400: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Validation error' },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string', example: 'Email_user' },
                  message: { type: 'string', example: 'Email_user est obligatoire' },
                },
              },
            },
          },
        },

        Error401: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Unauthorized: token missing or invalid' },
          },
        },
      },
    },

    security: [{ bearerAuth: [] }],

    paths: {
      '/api/reservations': {
        get: {
          summary: 'Récupérer toutes les réservations',
          tags: ['Reservation'],
          responses: {
            200: { description: 'Liste des réservations' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        post: {
          summary: 'Créer une nouvelle réservation',
          tags: ['Reservation'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Reservation' },
              },
            },
          },
          responses: {
            201: { description: 'Réservation créée' },
            400: {
              description: 'Bad Request (champ obligatoire manquant / invalide)',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error400' } } },
            },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        delete: {
          summary: 'Supprimer une réservation',
          tags: ['Reservation'],
          parameters: [
            {
              name: 'id',
              in: 'query',
              required: true,
              description: 'ID de la réservation à supprimer',
              schema: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            },
          ],
          responses: {
            200: { description: 'Réservation supprimée' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            404: { description: 'Réservation non trouvée' },
            500: { description: 'Erreur serveur' },
          },
        },
      },

      '/api/rooms': {
        get: {
          summary: 'Récupérer toutes les salles',
          tags: ['Room'],
          responses: {
            200: { description: 'Liste des salles' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        post: {
          summary: 'Créer une nouvelle salle',
          tags: ['Room'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Room' },
              },
            },
          },
          responses: {
            201: { description: 'Salle créée' },
            400: {
              description: 'Bad Request (champ obligatoire manquant / invalide)',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error400' } } },
            },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        delete: {
          summary: 'Supprimer une salle',
          tags: ['Room'],
          parameters: [
            {
              name: 'id',
              in: 'query',
              required: true,
              description: 'ID de la salle à supprimer',
              schema: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            },
          ],
          responses: {
            200: { description: 'Salle supprimée' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            404: { description: 'Salle non trouvée' },
            500: { description: 'Erreur serveur' },
          },
        },
      },

      '/api/users': {
        get: {
          summary: 'Récupérer tous les utilisateurs',
          tags: ['User'],
          responses: {
            200: { description: 'Liste des utilisateurs' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        post: {
          summary: 'Créer un nouvel utilisateur',
          tags: ['User'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/User' },
              },
            },
          },
          responses: {
            201: { description: 'Utilisateur créé' },
            400: {
              description: 'Bad Request (champ obligatoire manquant / invalide)',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error400' } } },
            },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            500: { description: 'Erreur serveur' },
          },
        },
        delete: {
          summary: 'Supprimer un utilisateur',
          tags: ['User'],
          parameters: [
            {
              name: 'id',
              in: 'query',
              required: true,
              description: "ID de l'utilisateur à supprimer",
              schema: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            },
          ],
          responses: {
            200: { description: 'Utilisateur supprimé' },
            401: {
              description: 'Unauthorized',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Error401' } } },
            },
            404: { description: 'Utilisateur non trouvé' },
            500: { description: 'Erreur serveur' },
          },
        },
      },
    },
  },

  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
