import { Router } from 'express';
import { CreateCircleController, CreatePolygonController, ShapesController } from '../controllers';
import { ValidationMiddleware } from '../middleware';

const shapesRouter = Router();

shapesRouter.get('/', ShapesController.listAll);
shapesRouter.get('/:id', ValidationMiddleware.idValidator, ShapesController.getById);
shapesRouter.post('/circle', CreateCircleController.createCircleValidator, CreateCircleController.createCircle);
shapesRouter.post('/polygon', CreatePolygonController.createPolygonValidator, CreatePolygonController.createPolygon);
shapesRouter.delete('/:id', ValidationMiddleware.idValidator, ShapesController.deleteById);

export { shapesRouter };
