import { ConnectorRepository } from '@/repositories/maps/connectors.respository';
import { ConnectorsUseCase } from '@/usecases';

export const connectorsAdpter = () => {
    const repository = new ConnectorRepository();
    return new ConnectorsUseCase(repository);
};
