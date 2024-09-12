import Router from 'express';
import ProductRouter from './productRouter.js';


const router = new Router();

    router.use('/', ProductRouter);


export default router;