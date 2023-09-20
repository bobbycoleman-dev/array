import { Router } from "express";

import {
	createPost,
	getAllPosts,
	getAllUserPosts,
	getOnePost,
	updateOnePost,
	deleteOnePost
} from "../controllers/post-controller.js";

const postRouter = Router();

// prettier-ignore
postRouter
  .route('/')
  .post(createPost)
  .get(getAllPosts)

// prettier-ignore
postRouter
  .route('/:id')
  .get(getOnePost)
  .get(getAllUserPosts)
  .put(updateOnePost)
  .patch(updateOnePost)
  .delete(deleteOnePost);

export default postRouter;
