import { Shape } from './shape';

export class Circle extends Shape {
    radio: number;

    resize(percent: number): void {
        // TODO: error if percent <= 0

        this.radio = Math.round(this.radio * percent);
    }
}
