const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API docs',
      version: '1.0.0',
      description: 'Documentation interactive des modules '
    },
    servers: [
      { url: 'https://projetnosql-jlsp.onrender.com' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        CarnetSante: {
          type: 'object',
          required: ['nom'],
          properties: {
            nom: { type: 'string', example: 'Carnet Santé Médical Chien Max' },
            description: { type: 'string', example: 'Carnet annuel du suivi vétérinaire.' },
            date: { type: 'string', format: 'date-time', example: '2024-07-06T08:30:00Z' }
          }
        },
        // Schéma pour animal
        Animal: {
          type: 'object',
          required: ['Nom_espce', 'Date'],
          properties: {
            id: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            Nom_espece: { type: 'string', example: 'Paracétamol' },
            Date: { type: 'date', example: 2025-7-23 }
          }
        },
        Contact: {
          type: 'object',
          required: ['email', 'title'],
          properties: {
            email: { type: 'string', example: 'jane.doe@email.com' },
            title: { type: 'string', example: 'Contact support' },
            description: { type: 'string', example: 'Demande de support / description libre' },
            live: { type: 'boolean', example: false },
            picture: { type: 'string', example: 'https://exemple.com/image.jpg' },
            date: { type: 'string', format: 'date-time', example: '2025-07-21T23:00:00Z' }
          }
        },
        Produit: {
          type: 'object',
          required: ['nom', 'prix'],
          properties: {
            id: { type: 'string', example: '65ffc3fad3412cc8380001a8' },
            nom: { type: 'string', example: 'Paracétamol' },
            description: { type: 'string', example: 'Médicament contre la douleur et la fièvre' },
            prix: { type: 'number', format: 'float', example: 3.50 },
            stock: { type: 'integer', example: 24 }
          }
        },
      // ...
          Facture: {
             type: 'object',
            required: ['Nom_facture'],
             properties: {
             Nom_facture: { type: 'string', example: 'Facture vétérinaire Juin 2024' },
            created_at: { type: 'string', format: 'date-time', example: '2024-06-18T10:00:00Z' },
             
  }
         },

        Ferme: {
          type: 'object',
          required: ['Nom_ferme', 'Localisation_ferme'],
          properties: {
            Nom_ferme: { type: 'string', example: 'Ferme des Collines' },
            Localisation_ferme: { type: 'string', example: 'Montagne Est' },
            created_at: { type: 'string', format: 'date-time', example: '2024-07-10T09:00:00Z' },
            updated_at: { type: 'string', format: 'date-time', example: '2024-07-10T09:00:00Z' }
          }
        },
        
        Reporting: {
          type: 'object',
          required: ['title', 'description', 'date'],
          properties: {
            id: { type: 'string', example: 'z458c3fad3412cc8380341ee' },
            title: { type: 'string', example: 'Rapport annuel' },
            description: { type: 'string', example: "Rapport sur les activités de l'année." },
            date: { type: 'string', format: 'date', example: '2024-10-31' }
          }
        },
        // ---- CI-DESSOUS, les utilisateurs et l'authentification ----
        User: {
          type: 'object',
          required: ['Nom_user', 'Prenom_user'],
          properties: {
            Nom_user: { type: 'string', example: 'Dupont' },
            Prenom_user: { type: 'string', example: 'Alice' },
            Telephone_user: { type: 'string', example: '+33102030405' },
            Adresse_user: { type: 'string', example: '12 rue des Champs, Paris' },
            Email_user: { type: 'string', example: 'alice.dupont@email.com' },
            Mot_de_passe_user: { type: 'string', example: 'abcd1234' },
            Poste_user: { type: 'string', example: 'Responsable' },
            created_at: { type: 'string', format: 'date-time', example: '2024-06-20T14:00:00Z' },
            updated_at: { type: 'string', format: 'date-time', example: '2024-06-20T14:00:00Z' }
          }
        },
        UserRegister: {
          type: 'object',
          required: ['Nom_user', 'Prenom_user', 'Email_user', 'Mot_de_passe_user'],
          properties: {
            Nom_user: { type: 'string', example: 'Dupont' },
            Prenom_user: { type: 'string', example: 'Alice' },
            Telephone_user: { type: 'string', example: '+33102030405' },
            Adresse_user: { type: 'string', example: '12 rue des Champs, Paris' },
            Email_user: { type: 'string', example: 'alice.dupont@email.com' },
            Mot_de_passe: { type: 'string', example: 'abcd1234' },
            Poste_user: { type: 'string', example: 'Responsable' }
          
          }
        },
        UserLogin: {
          type: 'object',
          required: ['Email_user', 'Mot_de_passe_user'],
          properties: {
            Email_user: { type: 'string', example: 'alice.dupont@email.com' },
            Mot_de_passe: { type: 'string', example: 'abcd1234' }
          }
        },
        UserProfile: {
          type: 'object',
         properties: {
       
        Nom_user: { type: 'string', example: 'Dupont' },
        Prenom_user: { type: 'string', example: 'Alice' },
        Email_user: { type: 'string', example: 'alice.dupont@email.com' },
        Telephone_user: { type: 'string', example: '+33102030405' },
        Adresse_user: { type: 'string', example: '12 rue des Champs, Paris' },
        Poste_user: { type: 'string', example: 'Responsable' },
       createdAt: { type: 'string', format: 'date-time', example: '2025-07-25T14:03:00.000Z' },
       updatedAt: { type: 'string', format: 'date-time', example: '2025-07-25T14:03:00.000Z' }
         }
       }
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: [
    './Routes/reporting.js',

    './Routes/carnets.js',
    './Routes/produit.js',
    './Routes/facture.js',
    './Routes/ferme.js',
    './Routes/user.js',
    './Routes/contact.js',
    './Routes/authRoutes.js',
    './Routes/animal.js',
  ]
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

