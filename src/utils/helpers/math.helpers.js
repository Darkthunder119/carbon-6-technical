export const totalCost = (arr) => {
    const sum = arr.reduce((sum, a) => sum + a.price, 0);

    return sum;
};
