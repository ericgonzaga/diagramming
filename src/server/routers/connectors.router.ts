import { Router } from 'express';
import { ConnectorsController } from '../controllers';
import { ValidationMiddleware } from '../middleware';

const connectorRouter = Router();

export { connectorRouter };
