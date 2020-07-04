const router = require('express').Router();
const BookController = require('../../controllers/bookController');
const db = require('../../models');

// Matches with "/api/books"  (change this comment to what is when it works)
router
  .route('/')
  .get((req, res) => BookController.findAll(req, res, db.Book))
  .post((req, res) => BookController.create(req, res, db.Book))
  .get((req, res) => BookController.findById(req, res, db.Book))
  .post((req, res) => BookController.update(req, res, db.Book));

// Matches with "/api/books/:id"  (change this comment to what is when it works)
// router
//   .route('//')
//   .get((req, res) => BookController.findById(req, res, db.Book))
//   .post((req, res) => BookController.update(req, res, db.Book))
  // .delete((req, res) => BookController.remove(req, res, db.Book))

module.exports = router;
