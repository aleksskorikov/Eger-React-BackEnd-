import Router from 'express';
import ProductControllers from '../controllers/productControllers.js';


const router = new Router();


router.post('/products' , ProductControllers.create)
router.get('/products',  ProductControllers.getAll)
router.get('/products/:id', ProductControllers.getOne);
router.delete('/products/:id', ProductControllers.deleteProduct);
router.put('/products/:id', ProductControllers.update);
router.delete('/products/:id/delete-image/:imageName', ProductControllers.deleteImage);


export default router;



