import React, { useState } from 'react';
import '../../styles/scss/_editProductForm.scss';

const EditProductForm = ({ product, onSave }) => {
    const [formData, setFormData] = useState({
        id: product.id || '',
        name: product.name || '',
        price: product.price || '',
        imgSrc: product.imgSrc || '',
        img2: product.img2 || '',
        img3: product.img3 || '',
        img4: product.img4 || '',
        img5: product.img5 || '',
        img6: product.img6 || '',
        img7: product.img7 || '',
        img8: product.img8 || '',
        img9: product.img9 || '',
        img10: product.img10 || '',
        description: product.description || '',
        list1: product.list1 || '',
        list2: product.list2 || '',
        list3: product.list3 || '',
        list4: product.list4 || '',
        list5: product.list5 || '',
        list6: product.list6 || '',
        list7: product.list7 || '',
        list8: product.list8 || '',
        list9: product.list9 || '',
        list10: product.list10 || '',
        list11: product.list11 || '',
        list12: product.list12 || '',
        list13: product.list13 || '',
        list14: product.list14 || '',
        list15: product.list15 || '',
        list16: product.list16 || '',
        list17: product.list17 || '',
        list18: product.list18 || '',
        list19: product.list19 || '',
        list20: product.list20 || '',
        category: product.category || '',
        page_name: product.page_name || '',
        product_category: product.product_category || ''
    });

    const [imagePreviews, setImagePreviews] = useState({
        imgSrc: product.imgSrc ? `http://localhost:5001/static/${product.imgSrc}` : '',
        img2: product.img2 ? `http://localhost:5001/static/${product.img2}` : '',
        img3: product.img3 ? `http://localhost:5001/static/${product.img3}` : '',
        img4: product.img4 ? `http://localhost:5001/static/${product.img4}` : '',
        img5: product.img5 ? `http://localhost:5001/static/${product.img5}` : '',
        img6: product.img6 ? `http://localhost:5001/static/${product.img6}` : '',
        img7: product.img7 ? `http://localhost:5001/static/${product.img7}` : '',
        img8: product.img8 ? `http://localhost:5001/static/${product.img8}` : '',
        img9: product.img9 ? `http://localhost:5001/static/${product.img9}` : '',
        img10: product.img10 ? `http://localhost:5001/static/${product.img10}` : '',
    });

    const [imagesToDelete, setImagesToDelete] = useState({
        imgSrc: false,
        img2: false,
        img3: false,
        img4: false,
        img5: false,
        img6: false,
        img7: false,
        img8: false,
        img9: false,
        img10: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            const file = files[0];
            setFormData({ ...formData, [name]: file });

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews({ ...imagePreviews, [name]: reader.result });
                setImagesToDelete({ ...imagesToDelete, [name]: false }); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClear = (name) => {
        setFormData({ ...formData, [name]: '' });
    };

    const handleDeleteImage = async (name) => {
        if (window.confirm('Вы уверены, что хотите удалить это изображение?')) {
            try {
                const response = await fetch(`http://localhost:5001/api/products/${formData.id}/delete-image/${name}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                setFormData({ ...formData, [name]: '' });
                setImagePreviews({ ...imagePreviews, [name]: '' });
                setImagesToDelete({ ...imagesToDelete, [name]: true });
            } catch (error) {
                console.error('Ошибка при удалении изображения:', error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch(`http://localhost:5001/api/products/${formData.id}`, {
                method: 'PUT',
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const updatedProduct = await response.json();
            onSave(updatedProduct);
        } catch (error) {
            console.error('Ошибка при сохранении изменений:', error);
        }
    };

    return (
    <form onSubmit={handleSubmit} className="edit__product-form">
            <h1 className='product__form-title'>{formData.name}</h1>
            {Object.keys(imagePreviews).map((key, index) => (
            <div key={key} className='product__form-wrapper'>
                <label className='product__form-images'>
                    {`Изображение ${index + 1}:`}
                    
                    <input
                        type="file"
                        name={key}
                        onChange={handleFileChange}
                        className='product__form-imginput'
                    />
                    
                    {imagePreviews[key] ? (
                        <img src={imagePreviews[key]} style={{ width: '200px', height: '200px' }} />
                    ) : (
                        <div style={{ width: '200px', height: '200px', border: '1px solid #ccc' }}></div>
                    )}
                    <button type="button" onClick={() => handleDeleteImage(key)} className='product__clear-btn'>Удалить</button>
                </label>
            </div>
        ))}

            <label className='product__form-name'>
                Назва:
                <textarea type="text" name="name" value={formData.name} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('name')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-description'>
                Опис:
                <textarea type="text"  name="description" value={formData.description} onChange={handleInputChange} className='product__form-inputdescription'/>
                <button type="button" onClick={() => handleClear('description')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 1:
                <textarea type="text" name="list1" value={formData.list1} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list1')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 2:
                <textarea type="text" name="list2" value={formData.list2} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list2')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 3:
                <textarea type="text" name="list3" value={formData.list3} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list3')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 4:
                <textarea type="text" name="list4" value={formData.list4} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list4')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 5:
                <textarea type="text" name="list5" value={formData.list5} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list5')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 6:
                <textarea type="text" name="list6" value={formData.list6} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list6')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 7:
                <textarea type="text" name="list7" value={formData.list7} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list7')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 8:
                <textarea type="text" name="list8" value={formData.list8} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list8')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 9:
                <textarea type="text" name="list9" value={formData.list9} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list9')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 10:
                <textarea type="text" name="list10" value={formData.list10} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list10')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 11:
                <textarea type="text" name="list11" value={formData.list11} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list11')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 12:
                <textarea type="text" name="list12" value={formData.list12} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list12')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 13:
                <textarea type="text" name="list13" value={formData.list13} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list13')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 14:
                <textarea type="text" name="list14" value={formData.list14} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list14')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 15:
                <textarea type="text" name="list15" value={formData.list15} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list15')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 16:
                <textarea type="text" name="list16" value={formData.list16} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list16')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 17:
                <textarea type="text" name="list17" value={formData.list17} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list17')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 18:
                <textarea type="text" name="list18" value={formData.list18} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list18')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 19:
                <textarea type="text" name="list19" value={formData.list19} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list19')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-list'>
                Список 20:
                <textarea type="text" name="list20" value={formData.list20} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('list20')} className='product__clear-btn' >Очистити</button>
            </label>
            <label className='product__form-price'>
                Ціна:
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} className='product__form-input'/>
                <button type="button" onClick={() => handleClear('price')} className='product__clear-btn' >Очистити</button>
            </label>
            <button type="submit" className='product__form-btn'>Зберегти зміни</button>
        </form>
    );
};

export default EditProductForm;

