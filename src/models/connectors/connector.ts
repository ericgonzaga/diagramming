import { Shape } from '../shapes';
import { ConnectorType } from './ConnectorType.enum';

export class Connector {
    id: string;
    shapeA: Shape;
    shapeB: Shape;
    type: ConnectorType;

    constructor(shapeA: Shape, shapeB: Shape, type = ConnectorType.Line) {
        this.shapeA = shapeA;
        this.shapeB = shapeB;
        this.type = type;
    }
}
