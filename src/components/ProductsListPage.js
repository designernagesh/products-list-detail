import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductsListPage({productsList}) {
    const [ start, setStart ] = useState(0);
    const [ btnText, setBtnText ] = useState("Load More");
    let itermsPerpage = 8;

    const loadMoreHandler = () => {
        let newStart = start + itermsPerpage;
        setStart(newStart);
        setBtnText("Load More");
        
        if( newStart >= productsList.length) {            
            setBtnText("No More Products");
            return;
        }
    }
    
    useEffect(() => {
        setStart(0);
        setBtnText("Load More");
    }, [productsList]);

    return (
        <>
            <div className="title">PRODUCTS LIST</div>
            <div className='listProduct'>
                {
                    productsList.slice(0, start + itermsPerpage).map(product => <ProductCard key={product.id} product={product} /> )
                }
            </div>
            <div className='button-wrapper'>
                <button onClick={ loadMoreHandler }>{btnText}</button>
            </div>
        </>
    )
}

export default ProductsListPage
