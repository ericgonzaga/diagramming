import { StatusCodes } from 'http-status-codes';
import { expect, describe, it } from 'vitest';
import { testServer } from './test.setup';

const sutIds = new Array<string>();

describe('Circle', () => {
    it('Create default flow', async () => {
        const sut = await testServer.post('/shapes/circle').send({ centroid: { x: 0, y: 0 }, radio: 2 });

        expect(sut.statusCode).toEqual(StatusCodes.CREATED);
        expect(sut.body).toHaveProperty('id');

        sutIds.push(sut.body.id);
    });
});

describe('Polygon', () => {
    it('Create default flow', async () => {
        const sut = await testServer.post('/shapes/polygon').send({
            centroid: { x: 5, y: 5 },
            vertices: [
                { x: -2, y: -2 },
                { x: -2, y: 2 },
                { x: 2, y: 2 },
                { x: 2, y: -2 },
            ],
        });

        expect(sut.statusCode).toEqual(StatusCodes.CREATED);
        expect(sut.body).toHaveProperty('id');

        sutIds.push(sut.body.id);
    });
});

//===========================================================================================================

describe('List', () => {
    it('Default flow', async () => {
        const sut = await testServer.get('/shapes').send();

        expect(sut.statusCode).toEqual(StatusCodes.OK);
        expect(sut.body.length).equals(2);
    });
});

//===========================================================================================================

describe('Move', () => {
    it('Single', async () => {
        const sut = await testServer.put('/shapes/move').send({
            moveX: -1,
            moveY: -1,
            id: sutIds[0],
        });
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[0]}`).send();
        expect(shape.body.centroid.x).equals(-1);
        expect(shape.body.centroid.y).equals(-1);
    });

    it('Group', async () => {
        const sut = await testServer.put('/shapes/moveGroup').send({
            start: { x: 4, y: 6 },
            stop: { x: 6, y: 4 },
            moveX: 1,
            moveY: 1,
        });
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[1]}`).send();
        expect(shape.body.centroid.x).equals(6);
        expect(shape.body.centroid.y).equals(6);
    });
});

//===========================================================================================================

describe('Resize', () => {
    it('Single', async () => {
        const sut = await testServer.put('/shapes/resize').send({
            percent: 1.5,
            id: sutIds[0],
        });
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[0]}`).send();
        expect(shape.body.radio).equals(3);
    });

    it('Group', async () => {
        const sut = await testServer.put('/shapes/resizeGroup').send({
            start: { x: 5, y: 7 },
            stop: { x: 7, y: 5 },
            percent: 1.5,
        });
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[1]}`).send();
        expect(shape.body.vertices[0].x).equals(-3);
        expect(shape.body.vertices[0].y).equals(-3);
    });
});

//===========================================================================================================

describe('Test ValidationMiddleware return', () => {
    it('', async () => {
        const sut = await testServer.post('/shapes/circle').send({ centroid: { x: 0, y: 0 } });

        expect(sut.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(sut.body).toHaveProperty('errors');
    });
});

//===========================================================================================================

describe('Delete', () => {
    it('Single', async () => {
        const sut = await testServer.delete(`/shapes/${sutIds[0]}`).send();
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[0]}`).send();
        expect(shape.body).equals('');
    });

    it('Group', async () => {
        const sut = await testServer.put('/shapes/deleteGroup').send({
            start: { x: 5, y: 7 },
            stop: { x: 7, y: 5 },
        });
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const shape = await testServer.get(`/shapes/${sutIds[1]}`).send();
        expect(shape.body).equals('');
    });
});
