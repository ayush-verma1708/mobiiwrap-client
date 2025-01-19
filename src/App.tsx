import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/General Components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { ProductsDetail } from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;