
import React, { useState } from 'react';
import MenuImg from "../assets/images/menu img/patrons.jpg";
import MenuImg1 from "../assets/images/menu img/patrons1.jpg";
import MenuImg2 from "../assets/images/menu img/patrons2.jpg";
import MenuImg3 from "../assets/images/menu img/patrons3.jpg";
import MenuImg4 from "../assets/images/menu img/patrons4.jpg";
import MenuImg5 from "../assets/images/menu img/patrons5.jpg";
import ProductSlider from '../Components/productSlider';
import ProductCard from "../Components/productCard";
import "../styles/scss/_productPages.scss";
import OllAll from '../Components/oll-all';
import Mail from '../Components/mail';
import ToMainBtn from '../Components/toMainBtn';

const Guns = () => {
    const [activeMenuOne, setActiveMenuOne] = useState('all');

    const pageName = 'cartridges';

    return (
        <>
            <ProductSlider />
            <ToMainBtn/>
            <div className="menu">
                <h1 className="menu__title">Патрони</h1>
                <div className="menu__one" id="menu-one">
                    <div className="menu__items">
                        <img 
                            src={MenuImg} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'all' ? 'activ' : ''}`} 
                            data-id="all"
                            onClick={() => setActiveMenuOne('all')}
                        />
                        <p className="menu__name">Всі патрони</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg1} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category1' ? 'activ' : ''}`} 
                            data-id="product-category1"
                            onClick={() => setActiveMenuOne('product-category1')}
                        />
                        <p className="menu__name">Дробові патрони</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg2} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category2' ? 'activ' : ''}`} 
                            data-id="product-category2"
                            onClick={() => setActiveMenuOne('product-category2')}
                        />
                        <p className="menu__name">Картеч</p>
                    </div>
                    <div className="menu__items">
                        <img 
                            src={MenuImg3} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category3' ? 'activ' : ''}`} 
                            data-id="product-category3"
                            onClick={() => setActiveMenuOne('product-category3')}
                        />
                        <p className="menu__name">Кульові патрони</p>
                    </div>
                                        <div className="menu__items">
                        <img 
                            src={MenuImg4} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category4' ? 'activ' : ''}`} 
                            data-id="product-category4"
                            onClick={() => setActiveMenuOne('product-category4')}
                        />
                        <p className="menu__name">Нарізні</p>
                    </div>
                                        <div className="menu__items">
                        <img 
                            src={MenuImg5} 
                            alt="Menu" 
                            className={`menu__img ${activeMenuOne === 'product-category5' ? 'activ' : ''}`} 
                            data-id="product-category5"
                            onClick={() => setActiveMenuOne('product-category5')}
                        />
                        <p className="menu__name">Гладкоствольні</p>
                    </div>
                </div>

                <ProductCard pageName={pageName} activeCategory={activeMenuOne} productCategory="productsOne" />

            </div>
            <OllAll />
            <Mail/>
        </>
    );
};

export default Guns;