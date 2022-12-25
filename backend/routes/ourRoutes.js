const express = require('express');
const {getArticles, getSingleArticle, deleteArticle, updateArticle, addArticle} = require('../controller/ourController');

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getSingleArticle);
router.post('/', addArticle);
router.delete('/:id', deleteArticle);
router.patch('/:id', updateArticle);

module.exports = router;




