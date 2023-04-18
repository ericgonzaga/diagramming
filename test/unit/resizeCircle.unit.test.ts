import { expect, describe, it } from 'vitest';
import { Circle } from '../../src/models';
import { ErrorMessages } from '../../src/shared';

const sut = new Circle({ x: 0, y: 0 }, 10);

describe('Test resize shapes functions', () => {
    it('Test circle resize', () => {
        sut.resize(1.5);

        expect(sut.centroid.x).equals(0);
        expect(sut.centroid.y).equals(0);
        expect(sut.radio).equals(15);
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
