import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

// Mock the CartProvider component
jest.mock('./utils/context/cartContext', () => ({
    CartProvider: ({ children }) => <div>{children}</div>,
    useCart: () => ({
        state: { products: [] },
        addToCart: () => {},
        removeFromCart: () => {},
    }),
}));

describe('App', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('landing')).toBeInTheDocument();
    });
});
