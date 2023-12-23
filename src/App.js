import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsListPage from "./components/ProductsListPage";
import ProductDetails from "./components/ProductDetails";
import { useEffect, useState } from 'react';
import Header from "./components/Header";

function App() {
    const [ productsList, setProductsList ] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProductsList(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="wrapper">
            <BrowserRouter>
                    <Header />
                <Routes>
                    <Route path="/" element={<ProductsListPage productsList={productsList} />} />
                    <Route path="/products/:id" element={<ProductDetails productsList={productsList} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
