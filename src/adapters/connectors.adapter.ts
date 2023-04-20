import { InMemoryMapRepository } from '../repositories';
import { ConnectorsUseCase } from '../usecases';

export const getConnectorsUseCase = () => {
    const repository = new InMemoryMapRepository.ConnectorsMemoryRepository();
    return new ConnectorsUseCase(repository);
};
