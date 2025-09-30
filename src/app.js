// src/app.js
const express = require('express');
const cors = require('cors');
const restaurantsRouter = require('./routes/restaurants.routes');
const notFound = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/error.middleware');
const submissionsRouter = require('./routes/submissions.routes');

function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/submissions', submissionsRouter);


  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/api/restaurants', restaurantsRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;