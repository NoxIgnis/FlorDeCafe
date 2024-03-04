import { Router } from 'express';
import ProductRouter from './modules/product/router';
import{} from './middlewares/validation';

class Routes {
    static define(router: Router): Router {
        router.use('/products', ProductRouter);
        router.use('/', ProductRouter);

        return router;
    }
}

export default Routes.define(Router());