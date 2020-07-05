const router = require('express').Router();
const BookController = require('../../controllers/bookController');
const db = require('../../models');

// Matches with "/api/books"  (change this comment to what is when it works)
router
  .route('/')
  .get((req, res) => BookController.findAll(req, res, db.Book))
  .post((req, res) => BookController.create(req, res, db.Book))
  .get((req, res) => BookController.findById(req, res, db.Book))

router
  .route('/:id')
  .delete((req, res) => BookController.remove(req, res, db.Book));

module.exports = router;
