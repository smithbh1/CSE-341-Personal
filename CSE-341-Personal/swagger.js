const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Journal API to perform CRUD operations in Mongodb database'
  },
  host: 'still-ridge-25390.herokuapp.com',
  basePath: "/",
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);