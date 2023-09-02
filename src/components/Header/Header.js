import { useState } from 'react';

import { ShoppingCartSharp } from '@mui/icons-material';
import { Button } from '@mui/material';

import './header.css';
import CartModal from '../Cart/CartModal';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <div className="headerContainer">
                <h1 className="text-2xl">Our Products</h1>
                <Button className="cartButton" endIcon={<ShoppingCartSharp />} onClick={() => setIsCartOpen(true)}>
                    Cart
                </Button>
            </div>
            <CartModal open={isCartOpen} handleClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default Header;
