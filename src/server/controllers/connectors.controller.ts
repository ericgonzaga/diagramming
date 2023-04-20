import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ConnectorsAdapter } from '../../adapters';

export const listAll = async (req: Request, res: Response) => {
    const list = await ConnectorsAdapter.getConnectorsUseCase().listAll();
    return res.status(StatusCodes.OK).json(list);
};

export const getById = async (req: Request, res: Response) => {
    const connector = await ConnectorsAdapter.getConnectorsUseCase().getById(req.params.id);
    return res.status(StatusCodes.OK).json(connector);
};

//==============================================================

export const deleteById = async (req: Request, res: Response) => {
    await ConnectorsAdapter.getConnectorsUseCase().deleteById(req.params.id);
    return res.status(StatusCodes.OK).json();
};
