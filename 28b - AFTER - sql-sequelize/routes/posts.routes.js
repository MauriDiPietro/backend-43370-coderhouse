import express from 'express'
import * as controller from '../controllers/posts.controllers.js'
const router = express.Router()

router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPostById);
router.post('/', controller.createPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

export default router;