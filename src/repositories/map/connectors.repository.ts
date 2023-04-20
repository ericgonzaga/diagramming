import { generateHash } from '../../helpers';
import { Connector } from '../../models';
import { IConnectorsRepository } from '../../usecases';
import { InMemoryMap } from './InMemoryMap';

export class ConnectorsMemoryRepository implements IConnectorsRepository {
    memory: InMemoryMap;

    constructor() {
        this.memory = InMemoryMap.getInstance();
    }

    getById(id: string): Promise<Connector | undefined> {
        return Promise.resolve(this.memory.connectors.get(id));
    }

    listAll(): Promise<Connector[]> {
        return Promise.resolve(this.memory.connectors.values());
    }

    create(connector: Connector): Promise<Connector> {
        connector.id = generateHash();
        this.memory.connectors.set(connector.id, connector);
        return Promise.resolve(connector);
    }

    deleteById(id: string): Promise<void> {
        this.memory.connectors.delete(id);
        return Promise.resolve();
    }

    deleteByShape(shapeId: string): Promise<void> {
        this.memory.connectors.forEach((connector, key) => {
            if (connector.shapeA.id === shapeId || connector.shapeB.id === shapeId) {
                this.memory.connectors.delete(key);
            }
        });
        return Promise.resolve();
    }
}
