import express from 'express'
import { createPost, allPosts , deletePost } from '../controller/postController.js';
import authUser from '../middleware/authUser.js';
import upload from '../middleware/upload.js';

const postRouter = express.Router();

postRouter.post("/create", authUser, upload.array("media"), createPost);
postRouter.get("/all", allPosts);
postRouter.delete("/delete/:delid", authUser, deletePost);

export default postRouter;