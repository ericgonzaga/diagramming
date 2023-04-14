import { z } from 'zod';

export type IIdProps = {
    id: string;
};

export const IdSchema: z.ZodType<IIdProps> = z.object({
    id: z.string().min(3),
});
