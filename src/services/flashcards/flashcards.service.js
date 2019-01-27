// Initializes the `flashcards` service on path `/flashcards`
const createService = require('feathers-nedb');
const createModel = require('../../models/flashcards.model');
const hooks = require('./flashcards.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/flashcards', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('flashcards');

  service.hooks(hooks);
};
