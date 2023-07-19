import express from 'express';
import { createComment, getComment} from '../controller/comment.js';
import  {verifyToken}  from '../middleware/auth.js';
const routerComment = express.Router();

routerComment.get('/comment',getComment);
routerComment.post('/comment',createComment);



export default routerComment;