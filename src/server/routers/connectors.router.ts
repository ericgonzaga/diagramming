import { Router } from 'express';
import { ConnectorsController, CreateConnectorsController } from '../controllers';
import { ValidationMiddleware } from '../middleware';

const connectorsRouter = Router();

connectorsRouter.get('/', ConnectorsController.listAll);
connectorsRouter.get('/:id', ValidationMiddleware.idValidator, ConnectorsController.getById);
connectorsRouter.post('/arrow', CreateConnectorsController.createValidator, CreateConnectorsController.createArrow);
connectorsRouter.post('/line', CreateConnectorsController.createValidator, CreateConnectorsController.createLine);
connectorsRouter.delete('/:id', ValidationMiddleware.idValidator, ConnectorsController.deleteById);

export { connectorsRouter };
