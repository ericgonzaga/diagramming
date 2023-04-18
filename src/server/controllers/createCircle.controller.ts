import z from 'zod';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ValidationMiddleware } from '../middleware';
import { ShapesAdapter } from '@/adapters';
import { Circle } from '@/models';

type CircleInputDTO = Omit<Circle, 'id' | 'resize' | 'move'>;

const CircleBodySchema: z.ZodType<CircleInputDTO> = z.object({
    radio: z.number().min(1),
    centroid: z.object({
        x: z.number().int(),
        y: z.number().int(),
    }),
});

export const createCircleValidator = ValidationMiddleware.validation({ body: CircleBodySchema });

export const createCircle = async (req: Request<{}, {}, CircleInputDTO>, res: Response) => {
    const id = await ShapesAdapter.getShapesUseCase().createCircle(req.body.centroid, req.body.radio);
    return res.status(StatusCodes.CREATED).send(id);
};
