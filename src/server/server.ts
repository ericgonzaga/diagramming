import 'express-async-errors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorMiddleware } from './middleware';
import { shapesRouter, connectorsRouter } from './routers';

const server = express();
server.use(express.json());

const version = process.env.npm_package_version;

server.get('/', (req, res) => {
    return res.redirect('/info');
});

server.get('/info', (req, res) => {
    return res.status(StatusCodes.OK).send(`Version ${version}`);
});

server.use('/shapes', shapesRouter);
server.use('/connectors', connectorsRouter);

server.use(ErrorMiddleware.middleware);

export { server };
