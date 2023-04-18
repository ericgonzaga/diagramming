import { Point } from './point';
import { Shape } from './shape';
import { InputError, ErrorMessages } from '../../shared';

export class Polygon extends Shape {
    vertices: Point[];

    constructor(centroid: Point, vertices: Point[]) {
        super(centroid);
        this.vertices = vertices;
    }

    resize(percent: number): void {
        if (!this.checkPercentIsValid(percent)) {
            throw new InputError(ErrorMessages.ResizePercentErrorMsg);
        }

        this.vertices.forEach((v) => {
            v.x = Math.round(v.x * percent);
            v.y = Math.round(v.y * percent);
        });
    }
}
