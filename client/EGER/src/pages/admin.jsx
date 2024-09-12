import React, { useState, useEffect  } from 'react';
import AdminProducs from '../Components/admin/adminProducts';
import '../styles/scss/_admin.scss';
import AddProductBtn from '../Components/admin/addProductBtn';
import AddProductForm from '../Components/admin/addProductForm';
import FetchProducts from '../Components/Hooks/FetchProducts.jsx';

    const Admin = () => {

    const [selectedCategory, setSelectedCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

        const handleProductsFetched = (fetchedProducts) => {
        setProducts(fetchedProducts);
    };
    

    const handleCategoryClick = (category, pageName, product_category) => {
        setSelectedCategory({ category, pageName, product_category });
        const filtered = products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    };
        
const handleAddProduct = async (newProduct) => {
    try {

        const formData = new FormData();


        formData.append('name', newProduct.name);
        formData.append('description', newProduct.description);
        formData.append('price', newProduct.price);
        formData.append('list1', newProduct.list1);
        formData.append('list2', newProduct.list2);
        formData.append('list3', newProduct.list3);
        formData.append('list4', newProduct.list4);
        formData.append('list5', newProduct.list5);
        formData.append('list6', newProduct.list6);
        formData.append('list7', newProduct.list7);
        formData.append('list8', newProduct.list8);
        formData.append('list9', newProduct.list9);
        formData.append('list10', newProduct.list10);
        formData.append('list11', newProduct.list11);
        formData.append('list12', newProduct.list12);
        formData.append('list13', newProduct.list13);
        formData.append('list14', newProduct.list14);
        formData.append('list15', newProduct.list15);
        formData.append('list16', newProduct.list16);
        formData.append('list17', newProduct.list17);
        formData.append('list18', newProduct.list18);
        formData.append('list19', newProduct.list19);
        formData.append('list20', newProduct.list20);
        formData.append('category', selectedCategory.category);
        formData.append('page_name', selectedCategory.pageName);
        formData.append('product_category', selectedCategory.product_category);


        if (newProduct.imgSrc) formData.append('imgSrc', newProduct.imgSrc);
        if (newProduct.img2) formData.append('img2', newProduct.img2);
        if (newProduct.img3) formData.append('img3', newProduct.img3);
        if (newProduct.img4) formData.append('img4', newProduct.img4);
        if (newProduct.img5) formData.append('img5', newProduct.img5);
        if (newProduct.img6) formData.append('img6', newProduct.img6);
        if (newProduct.img7) formData.append('img7', newProduct.img7);
        if (newProduct.img8) formData.append('img8', newProduct.img8);
        if (newProduct.img9) formData.append('img9', newProduct.img9);
        if (newProduct.img10) formData.append('img10', newProduct.img10);

        const response = await fetch('http://localhost:5001/api/products', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Ошибка при добавлении продукта в базу данных');
        }

        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setFilteredProducts([...filteredProducts, addedProduct]);
        setShowAddProductForm(false);

        console.log('Новый продукт добавлен админ:', addedProduct);
    } catch (error) {
        console.error('Ошибка при добавлении товара:', error);
    }
};

    return (
        <>
            <FetchProducts onProductsFetched={handleProductsFetched} />
            <div className="conteiner">
                <section className="sections">
                    <div className="hanter">
                    <p className="hanter-title">полювання</p>
                    <ol className="hanting__lists">
                        <li className="hanting__list" >
                        <div className="hanting__list-title">ружья</div>
                            <ul className='lists-nsme'>
                                <p className="hanter__list-subtitle" >Нарезные</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'guns', 'productsOne')}>напівавтомотичні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'guns', 'productsOne')}>Штуцери</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'guns', 'productsOne')}>з поздовжньо-ковзним затвором</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'guns', 'productsOne')}>Дрібноколіберні</li>
                            </ul>
                                <ul className='lists-nsme'>
                                <p className="hanter__list-subtitle">Гладкоствольные</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two1', 'guns', 'productsTwo')}>переломні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two2', 'guns', 'productsTwo')}>напівавтоматичні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two3', 'guns', 'productsTwo')}>помпові</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two4', 'guns', 'productsTwo')}>з продольно-ковзним затвором</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">патрони</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'cartridges', 'productsOne')}>Дробові патрони</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'cartridges', 'productsOne')}>Картеч</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'cartridges', 'productsOne')}>Кульові патрони</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'cartridges', 'productsOne')}>Нарізні</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'cartridges', 'productsOne')}>Гладкоствольні</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'accessories', 'productsOne')}>Кейси</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'accessories', 'productsOne')}>Чохли</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'accessories', 'productsOne')}>Підсумки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'accessories', 'productsOne')}>Коробки для патронів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'accessories', 'productsOne')}>Щбкладинки на документі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'accessories', 'productsOne')}>Патронташі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'accessories', 'productsOne')}>Фіксатори патронів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'accessories', 'productsOne')}>Ремені збройові</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ножі</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'knives', 'productsOne')}>Ножі з фіксованим клинком</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'knives', 'productsOne')}>Складні ножі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'knives', 'productsOne')}>Тренувальна зброя</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'knives', 'productsOne')}>Комплектуючі для ножів</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'knives', 'productsOne')}>Точильні пристрої</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ОДЯГ</div>
                            <ul className='lists-nsme'>
                            <p className="hanter__list-subtitle">Верхній одяг</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'cloth', 'productsOne')}>Куртки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'cloth', 'productsOne')}>Костюми</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'cloth', 'productsOne')}>Футболки та джемпера</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'cloth', 'productsOne')}>Штани та комбінезони</li>
                                </ul>
                            <ul className='lists-nsme'>
                            <p className="hanter__list-subtitle">Взуття</p>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two1', 'cloth', 'productsTwo')}>Черевики</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two2', 'cloth', 'productsTwo')}>Чоботи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two3', 'cloth', 'productsTwo')}>Гумові чоботи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category-two4', 'cloth', 'productsTwo')}>Заброди та комбінезони</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">ДОГЛЯД ЗА ЗБРОЄЮ</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'care', 'productsOne')}>Шомполи</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'care', 'productsOne')}>Набори для чищення</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'care', 'productsOne')}>Протяжки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'care', 'productsOne')}>Насадки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'care', 'productsOne')}>Направляючі</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'care', 'productsOne')}>Засоби для чишення</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'care', 'productsOne')}>Фарба</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'care', 'productsOne')}>Інші аксесуари</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">мисливськи аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'hunting_accessories', 'productsOne')}>Опудала</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'hunting_accessories', 'productsOne')}>Горни</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'hunting_accessories', 'productsOne')}>Маскування</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'hunting_accessories', 'productsOne')}>Радіостанціі</li>
                            </ul>
                        </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">стрілецьки аксесуари</div>
                            <ul>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'shooting_accessories', 'productsOne')}>Мішені</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'shooting_accessories', 'productsOne')}>Тарілки</li>
                                <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'shooting_accessories', 'productsOne')}>Інше</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="fisthing">
                <p className="hanter-title">риболовля</p>
                <ol className="hanting__lists">
                        <li className="hanting__list">
                        <div className="hanting__list-title">вудки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'fishing_rods', 'productsOne')}>Спінінгові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'fishing_rods', 'productsOne')}>Кастингові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'fishing_rods', 'productsOne')}>Фідерні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'fishing_rods', 'productsOne')}>Морські</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'fishing_rods', 'productsOne')}>Коропові</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'fishing_rods', 'productsOne')}>Поплавочні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'fishing_rods', 'productsOne')}>Вершинки та камлі</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">котушки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'coils', 'productsOne')}>Безінерційні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'coils', 'productsOne')}>Мультиплікаторні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'coils', 'productsOne')}>Провідні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'coils', 'productsOne')}>Додаткові шпулі</li>
                        </ul>
                    </li>
                        <li className="hanting__list">с
                        <div className="hanting__list-title">cнасті</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'tackle', 'productsOne')}>Готові монтажі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'tackle', 'productsOne')}>Гачки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'tackle', 'productsOne')}>Грузила</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'tackle', 'productsOne')}>Джиг - головки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'tackle', 'productsOne')}>Годівниці</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'tackle', 'productsOne')}>Поплавки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'tackle', 'productsOne')}>Карабіни та застібки</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">прикормки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'lure', 'productsOne')}>Блешні</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'lure', 'productsOne')}>Балансири</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'lure', 'productsOne')}>Воблери</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'lure', 'productsOne')}>Силікон</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'lure', 'productsOne')}>Діпи</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'lure', 'productsOne')}>прикормки</li>
                        </ul>
                    </li>
                    <li className="hanting__list">
                        <div className="hanting__list-title">обладнання</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'equipment_fithing', 'productsOne')}>Ракети та рогатки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'equipment_fithing', 'productsOne')}>Ємності для підгодовування</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'equipment_fithing', 'productsOne')}>Тубуси та чохли</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'equipment_fithing', 'productsOne')}>Сумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'equipment_fithing', 'productsOne')}>Коробки для риболовлі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'equipment_fithing', 'productsOne')}>Платформи та станції</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'equipment_fithing', 'productsOne')}>Ящики для риболовлі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'equipment_fithing', 'productsOne')}>Поводочниці та мотовила</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Ліхтарі</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'lanterns', 'productsOne')}>Комплектуючі для ліхтарів</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'lanterns', 'productsOne')}>Налобні ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'lanterns', 'productsOne')}>Ручні ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'lanterns', 'productsOne')}>Кемпенгові ліхтарі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'lanterns', 'productsOne')}>Ліхтарі зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'lanterns', 'productsOne')}>Елементи живлення</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Термобілизна</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'thermal_underwear', 'productsOne')}>Термобілизна</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'thermal_underwear', 'productsOne')}>Шкарпетки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'thermal_underwear', 'productsOne')}>Головні убори</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'thermal_underwear', 'productsOne')}>Нашивки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'thermal_underwear', 'productsOne')}>Рукавички</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'thermal_underwear', 'productsOne')}>Пояси</li>
                        </ul>
                    </li>
                </ol>
            </div>
                <div className="weapon">
                <p className="hanter-title">зброя та самооборона</p>
                <ol className="hanting__lists">
                        <li className="hanting__list">
                        <div className="hanting__list-title">зброя</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'gun', 'productsOne')}>Травматична зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'gun', 'productsOne')}>Пневматична зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'gun', 'productsOne')}>Зброя під патрон Флобер</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'gun', 'productsOne')}>Сигнально - шумова зброя</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'gun', 'productsOne')}>Метальна зброя</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">набої</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'bullets', 'productsOne')}>Патрони</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'bullets', 'productsOne')}>Пневматичні патрони</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'bullets', 'productsOne')}>Патрони Флобера</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'bullets', 'productsOne')}>Стріли</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Аксесуари</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'acces', 'productsOne')}>Зберігання та транспортування</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'acces', 'productsOne')}>Чищення та догляд</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'acces', 'productsOne')}>Стрілецькі аксесуари</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">комплектуючі</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'components', 'productsOne')}>Комплектуючі до зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'components', 'productsOne')}>Кріплення для оптики</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'components', 'productsOne')}>Травмотичній зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'components', 'productsOne')}>Пневматичній зброї</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'components', 'productsOne')}>Мітальній зброї</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Інстремент</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'tool', 'productsOne')}>Мультитули</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'tool', 'productsOne')}>Мочете</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'tool', 'productsOne')}>Тапори</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'tool', 'productsOne')}>Лопати</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'tool', 'productsOne')}>Пили</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'tool', 'productsOne')}>Спецінструмент</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Екіпірування</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'equipments', 'productsOne')}>Розвантажувальні та бронежелети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'equipments', 'productsOne')}>Страхувальні желети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'equipments', 'productsOne')}>Бронепластини</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'equipments', 'productsOne')}>Шоломи</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'equipments', 'productsOne')}>Налокітники та наколінники</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'equipments', 'productsOne')}>Навушники та беруші</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category7', 'equipments', 'productsOne')}>Окуляри</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category8', 'equipments', 'productsOne')}>Підсумки</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">засоби самозахисту</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'means', 'productsOne')}>засоби самозахисту</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'means', 'productsOne')}>Газові балончики</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div className="tourizm">
            <p className="hanter-title">туризм</p>
                <ol className="hanting__lists">
                    <li className="hanting__list">
                        <div className="hanting__list-title">Бівак</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'bivouac', 'productsOne')}>Складні меблі</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'bivouac', 'productsOne')}>Намети</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'bivouac', 'productsOne')}>Спальні мішки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'bivouac', 'productsOne')}>Килимки та каремати</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'bivouac', 'productsOne')}>Подушки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category6', 'bivouac', 'productsOne')}>Гігієна</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Сумки та рюкзаки</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'backpacks', 'productsOne')}>Сумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'backpacks', 'productsOne')}>Підсумки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'backpacks', 'productsOne')}>Рюкзаки</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category4', 'backpacks', 'productsOne')}>Чохли для спорядження</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category5', 'backpacks', 'productsOne')}>Гермопродукція</li>
                        </ul>
                    </li>
                        <li className="hanting__list">
                        <div className="hanting__list-title">Кухня та посуд</div>
                        <ul>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category1', 'dishes', 'productsOne')}>Пальники</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category2', 'dishes', 'productsOne')}>Термопродукція</li>
                            <li className='hanting__lists-list' onClick={() => handleCategoryClick('product-category3', 'dishes', 'productsOne')}>Туристичний посуд</li>
                        </ul>
                    </li>
                        </ol>
                        
                    </div>
                    
                </section>
                
            <p className='admin__products-clue'>Виберіть категорію товарів</p>

            <section className="admin-block">
                <div className="products">
                    {selectedCategory.category && (
                        <>
                            {filteredProducts.length > 0 ? (
                                <AdminProducs
                                    activeCategory={selectedCategory.category}
                                    pageName={selectedCategory.pageName}
                                    productCategory={selectedCategory.product_category}
                                    category={selectedCategory.category}
                                    onAddProduct={handleAddProduct}
                                    products={filteredProducts}
                                />
                            ) : (
                                <div>
                                <AddProductBtn onAddProduct={handleAddProduct} selectedCategory={selectedCategory} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    </>
    )
}

export default Admin;

