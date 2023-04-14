import { Circle, Point, Shape } from '@/models';
import { IShapesRepository } from './shapes.irepository';

export class ShapesUseCase {
    constructor(private readonly repository: IShapesRepository) {}

    async createPolygon() {}

    async createCircle(centroid: Point, radio: number): Promise<string> {
        const circle = new Circle(centroid, radio);
        return this.repository.create(circle);
    }

    async deleteById() {}

    async deleteGroup() {}

    async getById(id: string): Promise<Shape> {
        return this.repository.getById(id);
    }

    async listAll(): Promise<Shape[]> {
        return this.repository.listAll();
    }

    // TODO: rename x and y arguments
    async move(id: string, x: number, y: number) {
        const shape = await this.repository.getById(id);
        shape.move(x, y);
    }

    // TODO: rename x and y arguments
    async moveGroup(start: Point, stop: Point, x: number, y: number) {
        const shapes = await this.repository.listByRange(start, stop);
        shapes.forEach((s) => s.move(x, y));
    }

    async resize(id: string, percent: number) {
        const shape = await this.getById(id);
        shape.resize(percent);
    }

    async resizeGroup(start: Point, stop: Point, percent: number) {
        const shapes = await this.repository.listByRange(start, stop);
        shapes.forEach((s) => s.resize(percent));
    }
}
