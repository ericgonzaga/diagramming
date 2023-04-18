import { Point } from './point';

export abstract class Shape {
    id: string;
    centroid: Point;

    constructor(centroid: Point) {
        this.centroid = centroid;
    }

    public move(moveX: number, moveY: number): void {
        this.centroid.x += Math.round(moveX);
        this.centroid.y += Math.round(moveY);
    }

    protected checkPercentIsValid(percent: number): boolean {
        return percent > 0;
    }

    public abstract resize(percent: number): void;
}
