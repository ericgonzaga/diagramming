import { Point } from './point';

export abstract class Shape {
    id: string;
    centroid: Point;

    constructor(centroid: Point) {
        this.centroid = centroid;
    }

    // TODO: rename parameters
    public move(x: number, y: number): void {
        this.centroid.x += x;
        this.centroid.y += y;
    }

    protected checkPercentIsValid(percent: number): boolean {
        return percent > 0;
    }

    public abstract resize(percent: number): void;
}
