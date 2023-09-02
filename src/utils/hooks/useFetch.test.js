import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import useFetch from './useFetch';

// Create a mock HTTP server
const server = setupServer(
    rest.get('/api/data', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: 'Hello, World!' }));
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('useFetch returns data, isPending, and error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('/api/data'));

    // The initial state should have isPending as true
    expect(result.current.isPending).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    // Wait for the initial data fetch to complete
    await waitForNextUpdate();

    // After the fetch, isPending should be false, data should contain the response, and error should be null
    expect(result.current.isPending).toBe(false);
    expect(result.current.data).toEqual({ message: 'Hello, World!' });
    expect(result.current.error).toBe(null);
});
