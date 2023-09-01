import { ShoppingCartSharp } from '@mui/icons-material';
import { Button } from '@mui/material';
import './header.css';

const Header = () => (
    <div className="headerContainer">
        <h1 className="text-2xl">Our Products</h1>
        <Button className="text-lg px-4 mt-1" endIcon={<ShoppingCartSharp />}>
            Cart
        </Button>
    </div>
);

export default Header;
