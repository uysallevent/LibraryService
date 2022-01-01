const express = require('express');
const BookController = require('../controllers/BookController');
const BookDatabase = require('../../Infrastructure/Data/BookDatabase');
const BookRepository = require('../../Infrastructure/Repositories/BookRepository');

const bookRoutes = () => {
  const database = new BookDatabase();
  const repository = new BookRepository(database);
  const router = express.Router();
  const controller = BookController( repository );

  router.route('/')
    .get(controller.getAllBook)
    .post(controller.addBook)
    .put(controller.updateBook)
    .delete(controller.removeBook);

  return router;
}

module.exports = bookRoutes;
