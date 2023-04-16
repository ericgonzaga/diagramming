import { Shape, Point } from '@/models';
import { IShapesRepository } from '@/usecases';
import { InMemoryMap } from './InMemoryMap';
import { generateHash } from '@/helpers';

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
        throw new Error('Method not implemented.');
    }

    create(shape: Shape): Promise<string> {
        shape.id = generateHash();
        this.memory.shapes.set(shape.id, shape);
        return Promise.resolve(shape.id);
    }

    deleteById(id: string): Promise<void> {
        this.memory.shapes.delete(id);
        return Promise.resolve();
    }
}
