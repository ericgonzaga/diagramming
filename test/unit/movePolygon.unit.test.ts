import { expect, describe, it } from 'vitest';
import { Polygon } from '../../src/models';

const vertices = [
    { x: -2, y: -2 },
    { x: -2, y: 2 },
    { x: 2, y: 2 },
    { x: 2, y: -2 },
];

const sut = new Polygon({ x: 0, y: 0 }, vertices);

describe('Test resize shapes functions', () => {
    it('Test polygon movement', () => {
        sut.move(3, 2);

        expect(sut.centroid.x).equals(3);
        expect(sut.centroid.y).equals(2);
        expect(sut.vertices[0].x).equals(-2);
        expect(sut.vertices[0].y).equals(-2);
    });

    it('Float numbers must be rounded', () => {
        sut.move(-1.2, 5.7);

        expect(sut.centroid.x).equals(2);
        expect(sut.centroid.y).equals(8);
        expect(sut.vertices[0].x).equals(-2);
        expect(sut.vertices[0].y).equals(-2);
    });
});
