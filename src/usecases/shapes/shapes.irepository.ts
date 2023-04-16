import { Point, Shape } from '@/models';

export interface IShapesRepository {
    getById(id: string): Promise<Shape | undefined>;
    listAll(): Promise<Shape[]>;
    listByRange(start: Point, stop: Point): Promise<Shape[]>;
    create(shape: Shape): Promise<string>;
    deleteById(id: string): Promise<void>;
}
