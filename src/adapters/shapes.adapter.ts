import { InMemoryMapRepository } from '@/repositories';
import { ShapesUseCase } from '@/usecases';

export const shapesAdapter = () => {
    const repository = new InMemoryMapRepository.ShapesMemoryRepository();
    return new ShapesUseCase(repository);
};
