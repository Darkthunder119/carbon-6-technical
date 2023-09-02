import { memo } from 'react';

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
        <Card sx={{ minWidth: 275, maxWidth: 350 }} className="productCardContainer" data-testid="product-card">
            <div className="p-2">
                <Typography className="cardHeaderText">{product.name}</Typography>
                <Typography className="cardText" sx={{ mb: 1.5 }}>
                    {product.category}
                </Typography>
            </div>
            <div>
                <Typography className="cardText p-2" variant="body2">
                    $ {product.price}
                </Typography>
                <Button
                    size="small"
                    endIcon={<AddShoppingCartSharp className="addToCartIcon" />}
                    className="addToCartButton"
                    onClick={addToCart}
                    data-testid="AddToCart"
                >
                    Add To Cart
                </Button>
            </div>
        </Card>
    );
};

export default memo(ProductCard);
