import { Request, Response } from 'express';
import { ConnectorsAdapter, ShapesAdapter } from '../../adapters';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { PointSchema, ValidationMiddleware } from '../middleware';
import { Point } from '../../models';

export const deleteById = async (req: Request, res: Response) => {
    await ShapesAdapter.getShapesUseCase().deleteById(req.params.id);
    return res.status(StatusCodes.OK).send();
};

type DeleteGroupInputDTO = {
    start: Point;
    stop: Point;
};

const DeleteGroupBodySchema: z.ZodType<DeleteGroupInputDTO> = z.object({
    start: PointSchema,
    stop: PointSchema,
});

export const deleteGroupShapeValidator = ValidationMiddleware.validation({ body: DeleteGroupBodySchema });

export const deleteGroup = async (req: Request<{}, {}, DeleteGroupInputDTO>, res: Response) => {
    await ShapesAdapter.getShapesUseCase().deleteGroup(req.body.start, req.body.stop);
    return res.status(StatusCodes.OK).send();
};
