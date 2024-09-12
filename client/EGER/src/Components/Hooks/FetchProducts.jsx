import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FetchProducts = ({ onProductsFetched }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                onProductsFetched(data);
                setError(null);
            } catch (error) {
                console.error('Ошибка при получении товаров:', error);
                setError(error);
            }
        };

        fetchProducts();
    }, [onProductsFetched]);

    if (error) {
        return <h1 className='error-title'>Щось не так зі з'єднанням!!! error 404!!!</h1>;
    }

    return null; 
};

FetchProducts.propTypes = {
    onProductsFetched: PropTypes.func.isRequired,
};

export default FetchProducts;
