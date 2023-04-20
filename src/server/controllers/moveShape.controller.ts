import { z } from 'zod';

import { Point } from '../../models';
import { IdSchema, PointSchema, ValidationMiddleware } from '../middleware';
import { Request, Response } from 'express';
import { ShapesAdapter } from '../../adapters';
import { StatusCodes } from 'http-status-codes';

type MoveInputDTO = {
    moveX: number;
    moveY: number;
    id: string;
};

const MoveBodySchema: z.ZodType<MoveInputDTO> = z.object({
    moveX: z.number().int(),
    moveY: z.number().int(),
    id: IdSchema,
});

export const moveShapeValidator = ValidationMiddleware.validation({ body: MoveBodySchema });

export const moveShape = async (req: Request<{}, {}, MoveInputDTO>, res: Response) => {
    await ShapesAdapter.getShapesUseCase().move(req.body.id, req.body.moveX, req.body.moveY);
    return res.status(StatusCodes.OK).send();
};

type MoveGroupInputDTO = {
    start: Point;
    stop: Point;
    moveX: number;
    moveY: number;
};

const MoveGroupBodySchema: z.ZodType<MoveGroupInputDTO> = z.object({
    start: PointSchema,
    stop: PointSchema,
    moveX: z.number().int(),
    moveY: z.number().int(),
});

export const moveGroupShapeValidator = ValidationMiddleware.validation({ body: MoveGroupBodySchema });

export const moveGroupShape = async (req: Request<{}, {}, MoveGroupInputDTO>, res: Response) => {
    await ShapesAdapter.getShapesUseCase().moveGroup(req.body.start, req.body.stop, req.body.moveX, req.body.moveY);
    return res.status(StatusCodes.OK).send();
};
