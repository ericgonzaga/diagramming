import { Connector } from '@/models';
import { IConnectorsRepository } from '@/usecases';
import { InMemoryMapRepository } from './InMemoryMapRepository';
import { generateHash } from '@/helpers';
export class ConnectorRepository implements IConnectorsRepository {
    repository: InMemoryMapRepository;

    constructor() {
        this.repository = InMemoryMapRepository.getInstance();
    }

    getById(id: string): Promise<Connector | undefined> {
        return Promise.resolve(this.repository.connectors.get(id));
    }

    listAll(): Promise<Connector[]> {
        return Promise.resolve(this.repository.connectors.values());
    }

    create(connector: Connector): Promise<string> {
        connector.id = generateHash();
        this.repository.connectors.set(connector.id, connector);
        return Promise.resolve(connector.id);
    }

    deleteById(id: string): Promise<void> {
        this.repository.connectors.delete(id);
        return Promise.resolve();
    }

    deleteByShape(shapeId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
