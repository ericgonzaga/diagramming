import { Connector } from '../../models';

export interface IConnectorsRepository {
    getById(id: string): Promise<Connector | undefined>;
    listAll(): Promise<Connector[]>;
    create(connector: Connector): Promise<Connector>;
    deleteById(id: string): Promise<void>;
    deleteByShape(shapeId: string): Promise<void>;
}
