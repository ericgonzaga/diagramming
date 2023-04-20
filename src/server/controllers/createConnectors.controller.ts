import { z } from 'zod';
import { ConnectorType } from '../../models';
import { IdSchema, ValidationMiddleware } from '../middleware';
import { Request, Response } from 'express';
import { ConnectorsAdapter, ShapesAdapter } from '../../adapters';
import { StatusCodes } from 'http-status-codes';
import { InputNotFoundError } from '../../shared';

type ConnectorCreateInputDTO = {
    shapeA: string;
    shapeB: string;
};

const ConnectorCreateBodySchema: z.ZodType<ConnectorCreateInputDTO> = z.object({
    shapeA: IdSchema,
    shapeB: IdSchema,
});

export const createValidator = ValidationMiddleware.validation({ body: ConnectorCreateBodySchema });

export const createLine = async (req: Request<{}, {}, ConnectorCreateInputDTO>, res: Response) => {
    return create(req, res, ConnectorType.Line);
};

export const createArrow = async (req: Request<{}, {}, ConnectorCreateInputDTO>, res: Response) => {
    return create(req, res, ConnectorType.Arrow);
};

export const create = async (req: Request<{}, {}, ConnectorCreateInputDTO>, res: Response, type: ConnectorType) => {
    // TODO: move this code to the UC
    const shapesUC = ShapesAdapter.getShapesUseCase();
    const objShapeA = await shapesUC.getById(req.body.shapeA);
    const objShapeB = await shapesUC.getById(req.body.shapeB);

    if (!objShapeA || !objShapeB) {
        throw new InputNotFoundError('Shape id not found.');
    }

    const connector = await ConnectorsAdapter.getConnectorsUseCase().create(objShapeA, objShapeB, type);
    return res.status(StatusCodes.CREATED).json(connector);
};
