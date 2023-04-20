import { generateHash } from '../../helpers';
import { Point, Shape } from '../../models';
import { IShapesRepository } from '../../usecases';
import { InMemoryMap } from './InMemoryMap';

export class ShapesMemoryRepository implements IShapesRepository {
    memory: InMemoryMap;

    constructor() {
        this.memory = InMemoryMap.getInstance();
    }

    getById(id: string): Promise<Shape | undefined> {
        return Promise.resolve(this.memory.shapes.get(id));
    }

    listAll(): Promise<Shape[]> {
        return Promise.resolve(this.memory.shapes.values());
    }

    listByRange(start: Point, stop: Point): Promise<Shape[]> {
        const list = [...this.memory.shapes.values()].filter((s) => s.centroid.x >= start.x && s.centroid.x <= stop.x && s.centroid.y <= start.y && s.centroid.y >= stop.y);
        return Promise.resolve(list);
    }

    create(shape: Shape): Promise<Shape> {
        shape.id = generateHash();
        this.memory.shapes.set(shape.id, shape);
        return Promise.resolve(shape);
    }

    deleteById(id: string): Promise<void> {
        this.memory.shapes.delete(id);
        return Promise.resolve();
    }
}
