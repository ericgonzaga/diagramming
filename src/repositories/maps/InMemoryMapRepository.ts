import { Connector, Shape } from '@/models';
import HashMap from 'hashmap';

export class InMemoryMapRepository {
    public shapes: HashMap<string, Shape>;
    public connectors: HashMap<string, Connector>;

    private constructor() {
        this.shapes = new HashMap();
        this.connectors = new HashMap();
    }

    private static instance: InMemoryMapRepository;

    public static getInstance() {
        if (!InMemoryMapRepository.instance) {
            InMemoryMapRepository.instance = new InMemoryMapRepository();
        }
        return InMemoryMapRepository.instance;
    }
}
