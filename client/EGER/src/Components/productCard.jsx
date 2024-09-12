import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  
import '../styles/scss/_productCard.scss';
import FetchProducts from './Hooks/FetchProducts';

const ProductCard = ({ activeCategory, pageName, productCategory }) => {
    const [products, setProducts] = useState([]);

    const handleProductsFetched = (fetchedProducts) => {
        setProducts(fetchedProducts);
    };

    const filteredProducts = products.filter(product => {
        const productCategoryValue = product.product_category || 'productsOne';
        const isCategoryMatch = activeCategory === 'all' || (product.category && product.category.toLowerCase() === activeCategory.toLowerCase());
        const isPageNameMatch = pageName === 'all' || (product.page_name ? product.page_name.toLowerCase() === pageName.toLowerCase() : false);
        const isProductCategoryMatch = productCategory === 'all' || (productCategoryValue === productCategory);

        return isCategoryMatch && isPageNameMatch && isProductCategoryMatch;
    });

    return (
        <div className="products__card">
            <FetchProducts onProductsFetched={handleProductsFetched} />
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="card"> 
                        <img src={`http://localhost:5001/static/${product.imgSrc}`} alt={product.name} className="card-img" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">Ціна: {product.price} грн</p>
                    </Link>
                ))
            ) : (
                <p>На даний момент немає товарів у цій категорії</p>
            )}
        </div>
    );
};

ProductCard.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
};

export default ProductCard;
