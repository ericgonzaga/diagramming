import { Point, Shape } from '@/models';

export interface IShapesRepository {
    getById(id: string): Promise<Shape>;
    listAll(): Promise<Shape[]>;
    listByRange(start: Point, stop: Point): Promise<Shape[]>;
    create(shape: Shape): Promise<string>;
    deleteById(): Promise<void>;
}
