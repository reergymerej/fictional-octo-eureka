const flashcards = require('./flashcards/flashcards.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(flashcards);
};
