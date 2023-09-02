import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

// Mock the components used within Landing (Header and ProductList)
jest.mock('../Header/Header', () => () => <div data-testid="mocked-header">Header Component</div>);
jest.mock('../ProductList/ProductList', () => () => <div data-testid="mocked-product-list">ProductList Component</div>);

describe('Landing component', () => {
    it('renders Header and ProductList components', () => {
        const { getByTestId } = render(<Landing />);

        // Check if Header and ProductList components are rendered
        expect(getByTestId('mocked-header')).toBeInTheDocument();
        expect(getByTestId('mocked-product-list')).toBeInTheDocument();
    });

    it('renders the landing container', () => {
        const { getByTestId } = render(<Landing />);

        // Check if the landing container is rendered
        expect(getByTestId('landing')).toBeInTheDocument();
    });
});
