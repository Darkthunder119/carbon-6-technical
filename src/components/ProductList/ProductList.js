import useFetch from '../../utils/hooks/useFetch';
import ProductCard from '../ProductCard/ProductCard';

import './productlist.css';

const ProductList = () => {
    const { data, isPending, error } = useFetch('http://localhost:8080/api/products'); // using the URL directly here instead of in a .env file since this is easier to run for challenge purposes. In real world, this will be in env variables

    return (
        <div className="productListContainer">
            {isPending && <>Loading...</>}
            {data?.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
            {error && <>Server Error : Unable to Fetch Data, Please Try Again</>}
        </div>
    );
};

export default ProductList;
