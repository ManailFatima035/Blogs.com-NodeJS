const express = require('express');
const router = express.Router();
const blog = require('../model/blogs');
const blogController = require('../controller/blogController');

router.get('/' , blogController.blogIndex);

router.get('/' , blogController.blogDetails );

router.post('/' , blogController.blogCreatePost);

router.get('/:id' , blogController.blogCreateGet);
    
router.put('/update/:id' , blogController.blogUpdate );
    
router.delete('/:id' , blogController.blogDelete );

module.exports = router;
    