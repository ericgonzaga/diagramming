import { expect, describe, it } from 'vitest';
import { Polygon } from '../../src/models';
import { ErrorMessages } from '../../src/shared';

const vertices = [
    { x: -2, y: -2 },
    { x: -2, y: 2 },
    { x: 2, y: 2 },
    { x: 2, y: -2 },
];

const sut = new Polygon({ x: 0, y: 0 }, vertices);

describe('Test resize shapes functions', () => {
    it('Test polygon resize', () => {
        sut.resize(1.5);

        expect(sut.centroid.x).equals(0);
        expect(sut.centroid.y).equals(0);
        expect(sut.vertices[0].x).equals(-3);
        expect(sut.vertices[0].y).equals(-3);
    });

    it('Final vertices coordinates must be rounded', () => {
        sut.resize(1.8);

        expect(sut.centroid.x).equals(0);
        expect(sut.centroid.y).equals(0);
        expect(sut.vertices[0].x).equals(-5);
        expect(sut.vertices[0].y).equals(-5);
    });

    it('Percent < 0 error', () => {
        try {
            sut.resize(0);
            throw new Error('Test failed.');
        } catch (error) {
            expect(error.message).equals(ErrorMessages.ResizePercentErrorMsg);
        }
    });
});
