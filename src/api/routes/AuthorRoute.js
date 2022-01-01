const express = require('express');
const AuthorController = require('../controllers/AuthorController');
const AuthorDatabase = require('../../Infrastructure/Data/AuthorDatabase');
const BookDatabase = require('../../Infrastructure/Data/BookDatabase');
const AuthorRepository = require('../../Infrastructure/Repositories/AuthorRepository');

const authorRoutes = () => {
  const database = new AuthorDatabase();
  const bookDatabase = new BookDatabase();
  const repository = new AuthorRepository(database,bookDatabase);
  const router = express.Router();
  const controller = AuthorController( repository );

  router.route('/')
    .get(controller.getAllAuthor)
    .post(controller.addAuthor)
    .put(controller.updateAuthor)
    .delete(controller.removeAuthor);

  return router;
}

module.exports = authorRoutes;
