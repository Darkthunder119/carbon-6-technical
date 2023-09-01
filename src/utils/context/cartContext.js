import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            return { products: [...state.products, action.payload] };
        }
        case 'removeFromCart': {
            // to fix this after i add items
            return { products: [...state.products, action.payload] };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const initialState = {
    products: [],
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const value = { state, dispatch };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};

export { CartProvider, useCart };
