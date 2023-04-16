import { Point } from './point';
import { Shape } from './shape';

export class Polygon extends Shape {
    vertices: Point[];

    constructor(centroid: Point, vertices: Point[]) {
        super(centroid);
        this.vertices = vertices;
    }

    resize(percent: number): void {
        // TODO: error if percent <= 0

        this.vertices.forEach((v) => {
            v.x = Math.round(v.x * percent);
            v.y = Math.round(v.y * percent);
        });
    }
}
