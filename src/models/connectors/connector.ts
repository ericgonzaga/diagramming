import { Shape } from '../shapes';
import { ConnectorType } from './ConnectorType.enum';

export class Connector {
    id: string;
    shapeA: Shape;
    shapeB: Shape;
    type: ConnectorType;
}
