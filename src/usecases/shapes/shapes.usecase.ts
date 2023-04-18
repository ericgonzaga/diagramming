import { Circle, Point, Polygon, Shape } from '@/models';
import { IShapesRepository } from './shapes.irepository';

export class ShapesUseCase {
    constructor(private readonly repository: IShapesRepository) {}

    async createPolygon(centroid: Point, vertices: Point[]) {
        const polygon = new Polygon(centroid, vertices);
        return this.repository.create(polygon);
    }

    async createCircle(centroid: Point, radio: number): Promise<string> {
        const circle = new Circle(centroid, radio);
        return this.repository.create(circle);
    }

    async deleteById(id: string) {
        this.repository.deleteById(id);
    }

    async deleteGroup(start: Point, stop: Point) {
        const shapes = await this.repository.listByRange(start, stop);
        shapes.forEach((s) => this.repository.deleteById(s.id));
    }

    async getById(id: string): Promise<Shape | undefined> {
        return this.repository.getById(id);
    }

    async listAll(): Promise<Shape[]> {
        return this.repository.listAll();
    }

    async move(id: string, moveX: number, moveY: number) {
        const shape = await this.repository.getById(id);
        if (shape) {
            shape.move(moveX, moveY);
        }
    }

    async moveGroup(start: Point, stop: Point, moveX: number, moveY: number) {
        const shapes = await this.repository.listByRange(start, stop);
        shapes.forEach((s) => s.move(moveX, moveY));
    }

    async resize(id: string, percent: number) {
        const shape = await this.getById(id);
        if (shape) {
            shape.resize(percent);
        }
    }

    async resizeGroup(start: Point, stop: Point, percent: number) {
        const shapes = await this.repository.listByRange(start, stop);
        shapes.forEach((s) => s.resize(percent));
    }
}
