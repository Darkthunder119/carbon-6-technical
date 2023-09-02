import React from 'react';

import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

// Mock the CartModal component
jest.mock('../Cart/CartModal', () => ({
    __esModule: true,
    default: (open, handleClose) => (
        <div data-testid="cartModal">
            Mocked Cart Modal (open: {open.toString()}, handleClose: {handleClose.toString()})
        </div>
    ),
}));

test('renders Header component and opens CartModal when button is clicked', () => {
    const { getByText, getByTestId } = render(<Header />);

    // Check if the header title is displayed
    expect(getByText('Our Products')).toBeInTheDocument();

    // Check if the cart button is displayed
    const cartButton = getByText('Cart');

    expect(cartButton).toBeInTheDocument();

    fireEvent.click(cartButton);

    // Check if the CartModal component is opened with the correct props
    const cartModal = getByTestId('cartModal');

    expect(cartModal).toBeInTheDocument();
    expect(cartModal).toHaveTextContent('Mocked Cart Modal (open:');
});
