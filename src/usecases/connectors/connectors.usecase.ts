import { IConnectorsRepository } from './connectors.irepository';
import { Connector, ConnectorType, Shape } from '../../models';

export class ConnectorsUseCase {
    constructor(private readonly repository: IConnectorsRepository) {}

    async getById(id: string): Promise<Connector | undefined> {
        return this.repository.getById(id);
    }

    async listAll(): Promise<Connector[]> {
        return this.repository.listAll();
    }

    async create(shapeA: Shape, shapeB: Shape, type: ConnectorType): Promise<Connector> {
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
