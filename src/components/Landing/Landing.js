import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import './landing.css';

const Landing = () => (
    <div className="landingContainer" data-testid="landing">
        <Header />
        <ProductList />
    </div>
);

export default Landing;
