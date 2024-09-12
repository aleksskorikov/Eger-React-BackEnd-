import React, { useEffect, useState } from 'react';
import '../../styles/scss/_adminProducs.scss';
import DeliteBtn from './deliteBtn';
import AddProductBtn from './addProductBtn';
import EditProductForm from './EditProductForm';

const AdminProducs = ({ activeCategory, pageName, productCategory, category, onAddProduct }) => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Ошибка при получении товаров:', error);
            }
        };

        fetchProducts();
    }, [category, pageName, productCategory]);


        const filteredProducts = products.filter(product => {
        const productCategoryValue = product.product_category || 'productsOne';
        const productCategoryLower = productCategoryValue.toLowerCase();
        const activeCategoryLower = activeCategory ? activeCategory.toLowerCase() : '';
        const pageNameLower = pageName ? pageName.toLowerCase() : '';
        const productPageNameLower = product.page_name ? product.page_name.toLowerCase() : '';
        const categoryLower = category ? category.toLowerCase() : '';
        const productCategoryFromProduct = product.category ? product.category.toLowerCase() : '';

        const isCategoryMatch = category === 'all' || categoryLower === productCategoryFromProduct;
        const isActiveCategoryMatch = activeCategory === activeCategoryLower || productCategoryLower === activeCategoryLower;
        const isPageNameMatch = pageName === 'all' || productPageNameLower === pageNameLower;
        const isProductCategoryMatch = productCategory === 'all' || productCategory === productCategoryValue;

        return isCategoryMatch && isActiveCategoryMatch && isPageNameMatch && isProductCategoryMatch;
    });

    const handleDeleteSuccess = (deletedProductId) => {
        setProducts(products.filter(product => product.id !== deletedProductId));
    };

    const handleEditClick = (product) => {
        setEditingProduct(product); 
    };

    const handleSaveChanges = (updatedProduct) => {
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        setEditingProduct(null);
    };

    return (
        <div className="admin-block">
            <AddProductBtn onAddProduct={onAddProduct} />
            <div className="products__card">
                {filteredProducts.length === 0 ? (
                    <div className="no-products">
                        <p>На данный момент нет товаров в этой категории</p>
                    </div>
                ) : (
                    filteredProducts.map(product => {
                        const images = [
                            { src: product.imgSrc, field: 'imgSrc' },
                            { src: product.img2, field: 'img2' },
                            { src: product.img3, field: 'img3' },
                            { src: product.img4, field: 'img4' },
                            { src: product.img5, field: 'img5' },
                            { src: product.img6, field: 'img6' },
                            { src: product.img7, field: 'img7' },
                            { src: product.img8, field: 'img8' },
                            { src: product.img9, field: 'img9' },
                            { src: product.img10, field: 'img10' },
                        ].filter(img => img.src);

        return (
            <div key={product.id} className="admin-card">
                <div className="admin-slider">
                    {images.map((image, index) => (
                        <div key={index} className="admin-images">
                            <img src={`http://localhost:5001/static/${image.src}`} alt={`Slide ${index}`} className="admin-img" />
                        </div>
                    ))}
                </div>
                <div className="admin-name">
                    <p className='data-data'>{product.name || ''}</p>
                </div>
                <div className="admin-description">
                    <p className='data-data'>{product.description || ''}</p>
                </div>
                <ol className="product-lists">
                    {Array.from({ length: 20 }, (_, i) => `list${i + 1}`).map(listField => (
                        product[listField] && (
                            <div key={listField} className="admin-list">
                                <li>{product[listField] || ''}</li>
                            </div>
                        )
                    ))}
                </ol>
                <div className="admin-price">
                    <p className='data-data'>Ціна {product.price || ''}</p>
                </div>
                <button onClick={() => handleEditClick(product)} className='change-btn'>Изменить товар</button>
                <DeliteBtn style={'deleteBtn'} productId={product.id} onDeleteSuccess={() => handleDeleteSuccess(product.id)} />
            </div>
        );
    })
        )}
        {editingProduct && (
            <EditProductForm product={editingProduct} onSave={handleSaveChanges} />
        )}
    </div>
</div>
    );
};

export default AdminProducs;
