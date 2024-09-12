import React, { useState, useRef } from 'react';
import '../../styles/scss/_adminProducs.scss';

const EditableImageField = ({ currentImage, onSave, onCancel }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setSelectedFile(file);
            onSave(file); 
        }
    };

    const handleCancel = () => {
        setSelectedImage(null);  
        setSelectedFile(null);   
        fileInputRef.current.value = ''; 
        if (onCancel) {
            onCancel();  
        }
    };

    return (
        <div className="editable-image-field">
            <input
                type="file"
                onChange={handleFileChange}
                className='editables-input'
                ref={fileInputRef}
            />
            {selectedImage && <img src={selectedImage} alt="Selected" />}
            {selectedFile && (
                <button onClick={handleCancel} className='editable__btn-cancellation'>
                    Скасувати
                </button>
            )}
        </div>
    );
};

export default EditableImageField;
