import { server } from '../../src/server/server';
import supertest from 'supertest';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: { sequence: {} },
});

export const testServer = supertest(server);
