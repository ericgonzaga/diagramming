import { Connector, Shape } from '../../models';
import HashMap from 'hashmap';

export class InMemoryMap {
    public shapes: HashMap<string, Shape>;
    public connectors: HashMap<string, Connector>;

    private constructor() {
        this.shapes = new HashMap();
        this.connectors = new HashMap();
    }

    private static instance: InMemoryMap;

    public static getInstance() {
        if (!InMemoryMap.instance) {
            InMemoryMap.instance = new InMemoryMap();
        }
        return InMemoryMap.instance;
    }
}
