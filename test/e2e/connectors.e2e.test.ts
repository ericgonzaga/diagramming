import { StatusCodes } from 'http-status-codes';
import { testServer } from './test.setup';
import { expect, describe, it } from 'vitest';

const shapesIds = new Array<string>();
const connectorsIds = new Array<string>();

const createCircle = async (centroidX: number, centroidY: number, radio: number) => {
    return await testServer.post('/shapes/circle').send({ centroid: { x: centroidX, y: centroidY }, radio });
};

describe('Create connector link between two shapes', () => {
    it('Create a line and an arrow', async () => {
        shapesIds.push((await createCircle(0, 0, 2)).body.id);
        shapesIds.push((await createCircle(10, 10, 2)).body.id);
        shapesIds.push((await createCircle(-10, -10, 2)).body.id);

        const sutLine = await testServer.post('/connectors/line').send({ shapeA: shapesIds[0], shapeB: shapesIds[1] });
        expect(sutLine.statusCode).toEqual(StatusCodes.CREATED);
        expect(sutLine.body).toHaveProperty('id');
        connectorsIds.push(sutLine.body.id);

        const sutArrow = await testServer.post('/connectors/arrow').send({ shapeA: shapesIds[0], shapeB: shapesIds[2] });
        expect(sutArrow.statusCode).toEqual(StatusCodes.CREATED);
        expect(sutArrow.body).toHaveProperty('id');
        connectorsIds.push(sutArrow.body.id);
    });

    it('Test get by id', async () => {
        const sut = await testServer.get(`/connectors/${connectorsIds[0]}`).send();

        expect(sut.statusCode).toEqual(StatusCodes.OK);
        expect(sut.body.id).equals(connectorsIds[0]);
    });

    it('Test List', async () => {
        const sut = await testServer.get('/connectors').send();

        expect(sut.statusCode).toEqual(StatusCodes.OK);
        expect(sut.body.length).equals(2);
    });

    it('Shape not found', async () => {
        const sut = await testServer.post('/connectors/arrow').send({ shapeA: shapesIds[0], shapeB: '12345678901234567890123456789012' });
        expect(sut.statusCode).toEqual(StatusCodes.NOT_FOUND);
    });
});

describe('Delete connectors', () => {
    it('Delete by id', async () => {
        const sut = await testServer.delete(`/connectors/${connectorsIds[1]}`).send();
        expect(sut.statusCode).toEqual(StatusCodes.OK);

        const connector = await testServer.get(`/connectors/${connectorsIds[1]}`).send();
        expect(connector.statusCode).toEqual(StatusCodes.OK);
        expect(connector.body).toEqual('');
    });

    /* TODO: uncomment these lines when deleteByShape is implemented
    it('Delete when shape is deleted', async () => {
        await testServer.delete(`/shapes/${shapesIds[0]}`).send();

        const sut = await testServer.get(`/connectors/${connectorsIds[0]}`).send();
        expect(sut.statusCode).toEqual(StatusCodes.OK);
        expect(sut.body).toEqual('');
    });
    */
});
