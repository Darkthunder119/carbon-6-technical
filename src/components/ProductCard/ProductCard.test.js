import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

// Mock the useCart hook
jest.mock('../../utils/context/cartContext', () => ({
    useCart: () => ({
        state: { products: [] },
        dispatch: jest.fn(),
    }),
}));

describe('ProductCard component', () => {
    it('renders product details and adds to cart on button click', () => {
        const product = {
            id: 1,
            name: 'Product 1',
            category: 'Category A',
            price: 10.99,
        };

        const { getByText, getByTestId } = render(<ProductCard product={product} />);

        // Check if product details are rendered
        expect(getByText('Product 1')).toBeInTheDocument();
        expect(getByText('Category A')).toBeInTheDocument();
        expect(getByText('$ 10.99')).toBeInTheDocument();

        // Click the "Add to Cart" button
        const addToCartButton = getByTestId('AddToCart');
        fireEvent.click(addToCartButton);
    });
});
