import { totalCost } from './math.helpers';

describe('totalCost function', () => {
    it('should calculate the total cost of items in an array', () => {
        // Sample array of items with prices
        const items = [
            { name: 'Item 1', price: 10.99 },
            { name: 'Item 2', price: 5.49 },
            { name: 'Item 3', price: 7.99 },
        ];

        // Calculate the total cost using the totalCost function
        const result = totalCost(items);

        // Assert that the result is equal to the expected total cost (sum of prices)
        expect(result).toBe('24.47'); // The expected total cost with two decimal places
    });

    it('should handle an empty array by returning 0.00', () => {
        const items = [];

        const result = totalCost(items);

        expect(result).toBe('0.00');
    });

    it('should handle items with negative prices', () => {
        const items = [
            { name: 'Item 1', price: -5.99 },
            { name: 'Item 2', price: -2.49 },
        ];

        const result = totalCost(items);

        expect(result).toBe('-8.48');
    });
});
