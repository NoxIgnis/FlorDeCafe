import { Router } from 'express';
import ProductRouter from './modules/product/router';
class Routes {
    static define(router: Router): Router {
        router.use('/products', ProductRouter);

        return router;
    }
}

export default Routes.define(Router());