import { Router } from 'express';
import { CreateCircleController, CreatePolygonController, DeleteShapeController, MoveShapeController, ResizeShapeController, ShapesController } from '../controllers';
import { ValidationMiddleware } from '../middleware';

const shapesRouter = Router();

shapesRouter.get('/', ShapesController.listAll);
shapesRouter.get('/:id', ValidationMiddleware.idValidator, ShapesController.getById);
shapesRouter.post('/circle', CreateCircleController.createCircleValidator, CreateCircleController.createCircle);
shapesRouter.post('/polygon', CreatePolygonController.createPolygonValidator, CreatePolygonController.createPolygon);
shapesRouter.delete('/:id', ValidationMiddleware.idValidator, DeleteShapeController.deleteById);
shapesRouter.put('/deleteGroup', DeleteShapeController.deleteGroupShapeValidator, DeleteShapeController.deleteGroup);
shapesRouter.put('/resize', ResizeShapeController.resizeShapeValidator, ResizeShapeController.resizeShape);
shapesRouter.put('/resizeGroup', ResizeShapeController.resizeGroupShapeValidator, ResizeShapeController.resizeGroupShape);
shapesRouter.put('/move', MoveShapeController.moveShapeValidator, MoveShapeController.moveShape);
shapesRouter.put('/moveGroup', MoveShapeController.moveGroupShapeValidator, MoveShapeController.moveGroupShape);

export { shapesRouter };
