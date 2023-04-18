import { expect, describe, it } from 'vitest';
import { Circle } from '../../src/models';

const sut = new Circle({ x: 0, y: 0 }, 10);

describe('Test resize shapes functions', () => {
    it('Test polygon movement', () => {
        sut.move(3, 2);

        expect(sut.centroid.x).equals(3);
        expect(sut.centroid.y).equals(2);
    });

    it('Float numbers must be rounded', () => {
        sut.move(-1.2, 5.7);

        expect(sut.centroid.x).equals(2);
        expect(sut.centroid.y).equals(8);
    });
});
