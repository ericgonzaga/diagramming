import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
    public readonly status: StatusCodes;

    constructor(message: string, status: StatusCodes) {
        super(message);
        this.status = status;
    }
}

export class InputNotFoundError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.NOT_FOUND);
    }
}

export class InvalidInputError extends ApiError {
    constructor(message: string) {
        super(message, StatusCodes.BAD_REQUEST);
    }
}
