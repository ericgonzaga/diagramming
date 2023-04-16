import { connectorsAdapter } from '@/adapters';
import { ConnectorsUseCase } from '@/usecases';

export class ConnectorsController {
    usecase: ConnectorsUseCase;

    constructor() {
        this.usecase = connectorsAdapter();
    }
}
