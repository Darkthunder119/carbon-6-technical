import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { CartProvider, useCart } from './cartContext';

// Created a TestComponent that uses the context
const TestComponent = () => {
    const { state, dispatch } = useCart();

    const addToCart = (product) => {
        dispatch({ type: 'addToCart', payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'removeFromCart', payload: productId });
    };

    return (
        <div>
            <div data-testid="cart-items">{state.products.length} items in the cart</div>
            <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>Add to Cart</button>
            <button onClick={() => removeFromCart(1)}>Remove from Cart</button>
        </div>
    );
};

test('renders CartProvider and updates cart state', () => {
    const { getByText, getByTestId } = render(
        <CartProvider>
            <TestComponent />
        </CartProvider>,
    );

    // Check if initially, the cart is empty
    expect(getByTestId('cart-items')).toHaveTextContent('0 items in the cart');

    // Add an item to the cart
    fireEvent.click(getByText('Add to Cart'));
    expect(getByTestId('cart-items')).toHaveTextContent('1 items in the cart');

    // Remove an item from the cart
    fireEvent.click(getByText('Remove from Cart'));
    expect(getByTestId('cart-items')).toHaveTextContent('0 items in the cart');
});
