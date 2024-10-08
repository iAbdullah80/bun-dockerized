import { describe, it, expect } from 'bun:test';

describe('Bun Server', () => {
    it('should respond with "Welcome to Bun!"', async () => {
        const response = await fetch(`http://${Bun.env.CONTAINER}:3000`);
        const text = await response.text();
        expect(text).toBe('Welcome to Bun!');
    });

    it('should have status 200', async () => {
        const response = await fetch(`http://${Bun.env.CONTAINER}:3000`);
        expect(response.status).toBe(200);
    });
});