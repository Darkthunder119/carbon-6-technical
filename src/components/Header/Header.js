import { ShoppingCartSharp } from '@mui/icons-material';
import { Button } from '@mui/material';
import './header.css';

const Header = () => (
    <div className="headerContainer">
        <h1 className="text-2xl">Our Products</h1>
        <Button className="cartButton" endIcon={<ShoppingCartSharp />}>
            Cart
        </Button>
    </div>
);

export default Header;
