import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import { CartProvider } from '../../utils/context/cartContext';

// Mock useFetch hook
jest.mock('../../utils/hooks/useFetch', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('ProductList component', () => {
    beforeEach(() => {
        // Reset the mock for useFetch before each test
        jest.clearAllMocks();
    });

    it('renders loading message when fetching data', () => {
        // Mock useFetch to return loading state
        require('../../utils/hooks/useFetch').default.mockReturnValue({
            data: null,
            isPending: true,
            error: null,
        });

        render(
            <CartProvider>
                <ProductList />
            </CartProvider>,
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders product cards when data is available', async () => {
        // Mock useFetch to return sample data
        require('../../utils/hooks/useFetch').default.mockReturnValue({
            data: [
                { id: 1, name: 'Product 1', category: 'Category A', price: 19.99 },
                { id: 2, name: 'Product 2', category: 'Category B', price: 149.99 },
            ],
            isPending: false,
            error: null,
        });

        render(
            <CartProvider>
                <ProductList />
            </CartProvider>,
        );

        // Wait for the data to load
        await waitFor(() => {
            expect(screen.getAllByTestId('product-card')).toHaveLength(2); // Assuming you have a data-testid on the product cards
        });
    });

    it('handles error state', () => {
        // Mock useFetch to return an error
        require('../../utils/hooks/useFetch').default.mockReturnValue({
            data: null,
            isPending: false,
            error: 'Failed to fetch data',
        });

        render(
            <CartProvider>
                <ProductList />
            </CartProvider>,
        );

        expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
    });
});
