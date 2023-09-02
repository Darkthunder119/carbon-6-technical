import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartModal from './CartModal';

// Mock the useCart hook
jest.mock('../../utils/context/cartContext', () => ({
    useCart: () => ({
        state: { products: [] },
        dispatch: jest.fn(),
    }),
}));

describe('CartModal component', () => {
    it('renders the cart modal when open is true', () => {
        const handleClose = jest.fn();
        const { getByTestId, getByText } = render(<CartModal open={true} handleClose={handleClose} />);

        // Check if the cart modal is rendered when open is true
        expect(getByTestId('cart-modal')).toBeInTheDocument();

        // Check if the "My Shopping Cart" title is rendered
        expect(getByText('My Shopping Cart')).toBeInTheDocument();
    });

    it('does not render the cart modal when open is false', () => {
        const handleClose = jest.fn();
        const { queryByTestId } = render(<CartModal open={false} handleClose={handleClose} />);

        // Check that the cart modal is not in the document when open is false
        expect(queryByTestId('cart-modal')).toBeNull();
    });

    it('calls handleClose when the modal is closed', () => {
        const handleClose = jest.fn();
        const { getByTestId } = render(<CartModal open={true} handleClose={handleClose} />);

        // Click the close button
        fireEvent.click(getByTestId('modal-close-button'));

        // Check if handleClose was called
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
