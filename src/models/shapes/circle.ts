import { ErrorMessages, InputError } from '../../shared';
import { Point } from './point';
import { Shape } from './shape';

export class Circle extends Shape {
    radio: number;

    constructor(centroid: Point, radio: number) {
        super(centroid);
        this.radio = radio;
    }

    resize(percent: number): void {
        if (!this.checkPercentIsValid(percent)) {
            throw new InputError(ErrorMessages.ResizePercentErrorMsg);
        }

        this.radio = Math.round(this.radio * percent);
    }
}
