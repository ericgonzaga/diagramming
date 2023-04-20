import { z } from 'zod';

import { Point } from '../../models';
import { IdSchema, PointSchema, ValidationMiddleware } from '../middleware';
import { Request, Response } from 'express';
import { ShapesAdapter } from '../../adapters';
import { StatusCodes } from 'http-status-codes';

type ResizeInputDTO = {
    percent: number;
    id: string;
};

const ResizeBodySchema: z.ZodType<ResizeInputDTO> = z.object({
    percent: z.number().min(0),
    id: IdSchema,
});

export const resizeShapeValidator = ValidationMiddleware.validation({ body: ResizeBodySchema });

export const resizeShape = async (req: Request<{}, {}, ResizeInputDTO>, res: Response) => {
    await ShapesAdapter.getShapesUseCase().resize(req.body.id, req.body.percent);
    return res.status(StatusCodes.OK).send();
};

type ResizeGroupInputDTO = {
    start: Point;
    stop: Point;
    percent: number;
};

const ResizeGroupBodySchema: z.ZodType<ResizeGroupInputDTO> = z.object({
    start: PointSchema,
    stop: PointSchema,
    percent: z.number().min(0),
});

export const resizeGroupShapeValidator = ValidationMiddleware.validation({ body: ResizeGroupBodySchema });

export const resizeGroupShape = async (req: Request<{}, {}, ResizeGroupInputDTO>, res: Response) => {
    await ShapesAdapter.getShapesUseCase().resizeGroup(req.body.start, req.body.stop, req.body.percent);
    return res.status(StatusCodes.OK).send();
};
