import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const listAll = async (req: Request, res: Response) => {
    //const shapes = await getShapesUseCase().listAll();
    //return res.status(StatusCodes.OK).json(shapes);
    return res.status(StatusCodes.OK).json();
};
