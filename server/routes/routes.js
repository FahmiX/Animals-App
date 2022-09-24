const express = require('express');
const router = express.Router();
const content_API = require('../controllers/content');
const multer = require('multer')

// multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image");

// Content API
router.get('/', content_API.fetchAllPosts);
router.get('/:id', content_API.fetchPostById);
router.post('/post', upload, content_API.createPost);
router.patch('/:id', upload, content_API.updatePost);
router.delete('/:id', content_API.deletePost);

module.exports = router;