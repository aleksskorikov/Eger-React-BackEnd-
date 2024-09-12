import React, { useState } from 'react';
import EditableField from './editableField';
import EditableImageField from './editableImageField';
import '../../styles/scss/_adminProducs.scss';

const AddProductForm = ({ onSave, onCancel}) => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        list1: '',
        list2: '',
        list3: '',
        list4: '',
        list5: '',
        list6: '',
        list7: '',
        list8: '',
        list9: '',
        list10: '',
        list11: '',
        list12: '',
        list13: '',
        list14: '',
        list15: '',
        list16: '',
        list17: '',
        list18: '',
        list19: '',
        list20: '',
        price: '',
        imgSrc: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        img6: '',
        img7: '',
        img8: '',
        img9: '',
        img10: '',
    });
    const handleFieldChange = (field, value) => {
        setNewProduct(prevState => ({ ...prevState, [field]: value }));
    };

    const handleSaveClick = () => {
        const productToSave = {
        ...newProduct,
        };

        if (typeof onSave === 'function') {
            onSave(productToSave);
        } else {
            console.error('onSave не является функцией', onSave);
        }
    };

    return (
        <div className="add-product-form">
            <p className='product__form-subtitle' >основне фото</p>
            <EditableImageField currentImage={newProduct.imgSrc} onSave={(value) => handleFieldChange('imgSrc', value)} />
            <p className='product__form-subtitle' >додаткове фото 1</p>
            <EditableImageField currentImage={newProduct.img2} onSave={(value) => handleFieldChange('img2', value)} />
            <p className='product__form-subtitle' >додаткове фото 2</p>
            <EditableImageField currentImage={newProduct.img3} onSave={(value) => handleFieldChange('img3', value)} />
            <p className='product__form-subtitle' >додаткове фото 3</p>
            <EditableImageField currentImage={newProduct.img4} onSave={(value) => handleFieldChange('img4', value)} />
            <p className='product__form-subtitle' >додаткове фото 4</p>
            <EditableImageField currentImage={newProduct.img5} onSave={(value) => handleFieldChange('img5', value)} />
            <p className='product__form-subtitle' >додаткове фото 5</p>
            <EditableImageField currentImage={newProduct.img6} onSave={(value) => handleFieldChange('img6', value)} />
            <p className='product__form-subtitle' >додаткове фото 6</p>
            <EditableImageField currentImage={newProduct.img7} onSave={(value) => handleFieldChange('img7', value)} />
            <p className='product__form-subtitle' >додаткове фото 7</p>
            <EditableImageField currentImage={newProduct.img8} onSave={(value) => handleFieldChange('img8', value)} />
            <p className='product__form-subtitle' >додаткове фото 8</p>
            <EditableImageField currentImage={newProduct.img9} onSave={(value) => handleFieldChange('img9', value)} />
            <p className='product__form-subtitle' >додаткове фото 9</p>
            <EditableImageField currentImage={newProduct.img10} onSave={(value) => handleFieldChange('img10', value)} />
            <p className='product__form-subtitle' >назва товару</p>
            <EditableField value={newProduct.name} onSave={(value) => handleFieldChange('name', value)} />
            <p className='product__form-subtitle' >опис товару (не обов'язково)</p>
            <EditableField value={newProduct.description} onSave={(value) => handleFieldChange('description', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 1 (не обов'язково)</p>
            <EditableField value={newProduct.list1} onSave={(value) => handleFieldChange('list1', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 2 (не обов'язково)</p>
            <EditableField value={newProduct.list2} onSave={(value) => handleFieldChange('list2', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 3 (не обов'язково)</p>
            <EditableField value={newProduct.list3} onSave={(value) => handleFieldChange('list3', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 4 (не обов'язково)</p>
            <EditableField value={newProduct.list4} onSave={(value) => handleFieldChange('list4', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 5 (не обов'язково)</p>
            <EditableField value={newProduct.list5} onSave={(value) => handleFieldChange('list5', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 6 (не обов'язково)</p>
            <EditableField value={newProduct.list6} onSave={(value) => handleFieldChange('list6', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 7 (не обов'язково)</p>
            <EditableField value={newProduct.list7} onSave={(value) => handleFieldChange('list7', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 8 (не обов'язково)</p>
            <EditableField value={newProduct.list8} onSave={(value) => handleFieldChange('list8', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 9 (не обов'язково)</p>
            <EditableField value={newProduct.list9} onSave={(value) => handleFieldChange('list9', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 10 (не обов'язково)</p>
            <EditableField value={newProduct.list10} onSave={(value) => handleFieldChange('list10', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 11 (не обов'язково)</p>
            <EditableField value={newProduct.list11} onSave={(value) => handleFieldChange('list11', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 12 (не обов'язково)</p>
            <EditableField value={newProduct.list12} onSave={(value) => handleFieldChange('list12', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 13 (не обов'язково)</p>
            <EditableField value={newProduct.list13} onSave={(value) => handleFieldChange('list13', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 14 (не обов'язково)</p>
            <EditableField value={newProduct.list14} onSave={(value) => handleFieldChange('list14', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 15 (не обов'язково)</p>
            <EditableField value={newProduct.list15} onSave={(value) => handleFieldChange('list15', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 16 (не обов'язково)</p>
            <EditableField value={newProduct.list16} onSave={(value) => handleFieldChange('list16', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 17 (не обов'язково)</p>
            <EditableField value={newProduct.list17} onSave={(value) => handleFieldChange('list17', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 18 (не обов'язково)</p>
            <EditableField value={newProduct.list18} onSave={(value) => handleFieldChange('list18', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 19 (не обов'язково)</p>
            <EditableField value={newProduct.list19} onSave={(value) => handleFieldChange('list19', value)} />
            <p className='product__form-subtitle' >опис товару у вигляді списку пункт 20 (не обов'язково)</p>
            <EditableField value={newProduct.list20} onSave={(value) => handleFieldChange('list20', value)} />
            <p className='product__form-subtitle' >ціна товару</p>
            <EditableField value={newProduct.price} onSave={(value) => handleFieldChange('price', value)} />
            <div className="add__product-btns-block">
                <button onClick={handleSaveClick} className='add__product-btn-ok'>зберегти</button>
                <button onClick={onCancel} className='add__product-cancellation'>скасувати</button>
            </div>
        </div>
    );
};

export default AddProductForm;






