import { AddShoppingCartSharp } from '@mui/icons-material';
import { Card, Button, Typography } from '@mui/material';

import './productcard.css';
import { useCart } from '../../utils/context/cartContext';

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();
    const addToCart = () => {
        dispatch({ type: 'addToCart', payload: product });
    };

    return (
        <Card sx={{ minWidth: 275, maxWidth: 350 }} className="productCardContainer">
            <div className="p-2">
                <Typography className="cardHeaderText">{product.name}</Typography>
                <Typography className="cardText" sx={{ mb: 1.5 }}>
                    {product.category}
                </Typography>
                <Typography className="cardText" variant="body2">
                    {product.price}
                </Typography>
            </div>
            <div>
                <Button
                    size="small"
                    endIcon={<AddShoppingCartSharp className="addToCartIcon" />}
                    className="addToCartButton"
                    onClick={addToCart}
                >
                    Add To Cart
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;
