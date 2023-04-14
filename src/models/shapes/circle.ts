import { Point } from './point';
import { Shape } from './shape';

export class Circle extends Shape {
    radio: number;

    constructor(centroid: Point, radio: number) {
        super(centroid);
        this.radio = radio;
    }

    resize(percent: number): void {
        // TODO: error if percent <= 0

        this.radio = Math.round(this.radio * percent);
    }
}
