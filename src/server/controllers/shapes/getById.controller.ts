import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getById = async (req: Request, res: Response) => {
    //const shape = await getShapesUseCase().getById(req.params.id);
    //return res.status(StatusCodes.OK).json(shape);
    return res.status(StatusCodes.OK).json();
};
