import { ShapesAdapter } from '../../adapters';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const listAll = async (req: Request, res: Response) => {
    const list = await ShapesAdapter.getShapesUseCase().listAll();
    return res.status(StatusCodes.OK).json(list);
};

export const getById = async (req: Request, res: Response) => {
    const user = await ShapesAdapter.getShapesUseCase().getById(req.params.id);
    return res.status(StatusCodes.OK).json(user);
};
