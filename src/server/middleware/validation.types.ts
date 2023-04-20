import { Point } from '../../models';
import { z } from 'zod';

export type IIdProps = {
    id: string;
};

export const IdSchema = z.string().length(32);

export const IdBodySchema: z.ZodType<IIdProps> = z.object({
    id: IdSchema,
});

export const PointSchema: z.ZodType<Point> = z.object({
    x: z.number().int(),
    y: z.number().int(),
});
