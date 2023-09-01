import Landing from './components/Landing/Landing';
import { CartProvider } from './utils/context/cartContext';

function App() {
    return (
        <CartProvider>
            <Landing />
        </CartProvider>
    );
}

export default App;
