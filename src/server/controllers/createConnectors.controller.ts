import { z } from 'zod';
import { ConnectorType } from '@/models';
import { ValidationMiddleware } from '../middleware';
import { Request, Response } from 'express';
import { ConnectorsAdapter, ShapesAdapter } from '@/adapters';
import { StatusCodes } from 'http-status-codes';

type ConnectorCreateInputDTO = {
    shapeA: string;
    shapeB: string;
    type: ConnectorType;
};

const ConnectorCreateBodySchema: z.ZodType<ConnectorCreateInputDTO> = z.object({
    shapeA: z.string().min(3),
    shapeB: z.string().min(3),
    type: z.nativeEnum(ConnectorType),
});

export const createValidator = ValidationMiddleware.validation({ body: ConnectorCreateBodySchema });

export const create = async (req: Request<{}, {}, ConnectorCreateInputDTO>, res: Response) => {
    const shapesUC = ShapesAdapter.getShapesUseCase();

    console.log(req.body.shapeA);
    const objShapeA = await shapesUC.getById(req.body.shapeA);
    console.log(objShapeA);

    const objShapeB = await shapesUC.getById(req.body.shapeB);

    // TODO: create error treatment
    if (!objShapeA || !objShapeB) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }

    const id = await ConnectorsAdapter.getConnectorsUseCase().create(objShapeA, objShapeB, req.body.type);
    return res.status(StatusCodes.CREATED).json(id);
};
