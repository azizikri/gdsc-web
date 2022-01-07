const express = require('express');
const router = express.Router();
const { getIndex, getTambah, addBook, getDetail, getEdit, postEdit, deleteBook } = require('../controllers/book');

router.get('/', getIndex);
router.get('/tambah', getTambah);
router.post('/tambah', addBook);
router.get('/detail/:id', getDetail);
router.get('/edit/:id', getEdit);
router.post('/edit/:id', postEdit);
router.post('/delete', deleteBook);

module.exports = router;