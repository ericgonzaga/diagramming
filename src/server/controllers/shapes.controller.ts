import { shapesAdapter } from '@/adapters';
import { ShapesUseCase } from '@/usecases';

export class ShapesController {
    usecase: ShapesUseCase;

    constructor() {
        this.usecase = shapesAdapter();
    }
}
