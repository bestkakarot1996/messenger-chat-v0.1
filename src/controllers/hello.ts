import express from 'express';
import * as helloRepositories from '../repositories/hello';
const router = express.Router();


router.route('/')
    .get(helloRepositories.hello);



export default router;