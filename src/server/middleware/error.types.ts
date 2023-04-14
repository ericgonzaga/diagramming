import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
    public readonly status: StatusCodes;

    constructor(message: string, status: StatusCodes) {
        super(message);
        this.status = status;
    }
}
