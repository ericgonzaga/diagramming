import z from 'zod';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { PointSchema, ValidationMiddleware } from '../middleware';
import { ShapesAdapter } from '../../adapters';
import { Polygon } from '../../models';

type PolygonInputDTO = Omit<Polygon, 'id' | 'resize' | 'move'>;

const PolygonBodySchema: z.ZodType<PolygonInputDTO> = z.object({
    centroid: PointSchema,
    vertices: PointSchema.array().min(3),
});

export const createPolygonValidator = ValidationMiddleware.validation({ body: PolygonBodySchema });

export const createPolygon = async (req: Request<{}, {}, PolygonInputDTO>, res: Response) => {
    const id = await ShapesAdapter.getShapesUseCase().createPolygon(req.body.centroid, req.body.vertices);
    return res.status(StatusCodes.CREATED).send(id);
};
