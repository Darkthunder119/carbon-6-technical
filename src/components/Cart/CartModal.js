import { DeleteForeverSharp } from '@mui/icons-material';
import { IconButton, Modal, Typography } from '@mui/material';

import './cartmodal.css';
import { totalCost } from '../../utils/helpers/math.helpers';

const CartModal = ({ open, handleClose, products, dispatch }) => (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="cartContent">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    My Shopping Cart
                </Typography>
                <div className="cartItems mb-2 mt-4">
                    <div>Name</div>
                    <div>Price</div>
                </div>
                {products?.map((product, index) => (
                    <div key={index} className="cartItems">
                        <div>{product.name}</div>
                        <div className="cartPrice">
                            {product.price}
                            <IconButton
                                color="error"
                                onClick={() => dispatch({ type: 'removeFromCart', payload: product.id })}
                            >
                                <DeleteForeverSharp />
                            </IconButton>
                        </div>
                    </div>
                ))}
                {!products.length && (
                    <div className="cartItems">
                        <div>Cart is Empty</div>
                    </div>
                )}
                <div className="cartItems mt-4">
                    <div>Total:</div>
                    <div>{totalCost(products)}</div>
                </div>
            </div>
        </Modal>
    </div>
);

export default CartModal;
