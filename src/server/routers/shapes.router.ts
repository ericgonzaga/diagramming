import { Router } from 'express';
import { ShapesController } from '../controllers';
import { ValidationMiddleware } from '../middleware';

const shapesRouter = Router();

//shapesRouter.get('/', ShapesController.listAll);
//shapesRouter.get('/:id', ValidationMiddleware.idValidator, ShapesController.getById);
//shapesRouter.post('/', ShapesController.createValidator, ShapesController.create);
//shapesRouter.put('/:id', ShapesController.updateValidator, ShapesController.update);
//shapesRouter.delete('/:id', ValidationMiddleware.idValidator, ShapesController.deleteById);

export { shapesRouter };
