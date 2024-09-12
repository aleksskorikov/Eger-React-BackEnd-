import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/scss/_product.scss';
import Buttom from './buyBtn';
import Mail from '../Components/mail';
import OllAll from '../Components/oll-all';
import BackTuMenuBtn from './backTuMenuBtn';
import MarqueeСontent from './marqueeСontent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
        useEffect(() => {
        axios.get(`http://localhost:5001/api/products/${id}`)
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            console.error('Ошибка при загрузке товара:', error);
        });
    }, [id]);

    if (!product) {
        return <div>Завантаження...</div>;
    }

    const images = product.images || []; 
    return (
        <>
            <BackTuMenuBtn />
            <div className='product-wrapper'>
                <Slider {...settings} className='product__slider'>
                    {images.map((image, index) => (
                        <div key={index} className='product__slider-item'>
                            <img src={image} alt={`Slide ${index}`} className='product__slider-image' />
                        </div>
                    ))}
                </Slider>
                <h2 className='products-name'>{product.name}</h2>
                <div className='products-description'>
                    {product.description}
                    <ol className='product-lists'>
                        {product.list1 && <li className='product-list'>{product.list1}</li>}
                        {product.list2 && <li className='product-list'>{product.list2}</li>}
                        {product.list3 && <li className='product-list'>{product.list3}</li>}
                        {product.list4 && <li className='product-list'>{product.list4}</li>}
                        {product.list5 && <li className='product-list'>{product.list5}</li>}
                        {product.list6 && <li className='product-list'>{product.list6}</li>}
                        {product.list7 && <li className='product-list'>{product.list7}</li>}
                        {product.list8 && <li className='product-list'>{product.list8}</li>}
                        {product.list9 && <li className='product-list'>{product.list9}</li>}
                        {product.list10 && <li className='product-list'>{product.list10}</li>}
                        {product.list11 && <li className='product-list'>{product.list11}</li>}
                        {product.list12 && <li className='product-list'>{product.list12}</li>}
                        {product.list13 && <li className='product-list'>{product.list13}</li>}
                        {product.list14 && <li className='product-list'>{product.list14}</li>}
                        {product.list15 && <li className='product-list'>{product.list15}</li>}
                        {product.list16 && <li className='product-list'>{product.list16}</li>}
                        {product.list17 && <li className='product-list'>{product.list17}</li>}
                        {product.list18 && <li className='product-list'>{product.list18}</li>}
                        {product.list19 && <li className='product-list'>{product.list19}</li>}
                        {product.list20 && <li className='product-list'>{product.list20}</li>}
                    </ol>
                </div>
                <p className='products-price'>Ціна: {product.price} грн</p>
            </div>
            <Buttom />
            <Mail />
            <OllAll />
            <MarqueeСontent style={'product'} children={"УВАГА!!!!! Наявність товару та ціну будь ласка уточнюйте у продавця!"}/>
        </>
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            &lt;
        </div>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            
        </div>
    );
};

export default Product;