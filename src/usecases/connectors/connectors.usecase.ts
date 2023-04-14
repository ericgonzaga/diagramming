import { Connector, ConnectorType, Shape } from '@/models';
import { IConnectorsRepository } from './connectors.irepository';

export class ConnectorsUseCase {
    constructor(private readonly repository: IConnectorsRepository) {}

    async getById(id: string): Promise<Connector | undefined> {
        return this.repository.getById(id);
    }

    async listAll(): Promise<Connector[]> {
        return this.listAll();
    }

    async create(shapeA: Shape, shapeB: Shape, type: ConnectorType): Promise<string> {
        const connector = new Connector(shapeA, shapeB, type);
        return this.repository.create(connector);
    }

    async deleteById(id: string) {
        return this.repository.deleteById(id);
    }

    async deleteByShape(shapeId: string) {
        return this.repository.deleteByShape(shapeId);
    }
}
