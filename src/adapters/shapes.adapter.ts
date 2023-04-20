import { InMemoryMapRepository } from '../repositories';
import { ShapesUseCase } from '../usecases';

export const getShapesUseCase = () => {
    const repository = new InMemoryMapRepository.ShapesMemoryRepository();
    return new ShapesUseCase(repository);
};
