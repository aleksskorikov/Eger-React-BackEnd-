import React, { useState, useEffect } from 'react';
import '../../styles/scss/_adminProducs.scss';

const EditableField = ({ value, onSave, onCancel }) => {
    const [newValue, setNewValue] = useState(value);

    useEffect(() => {
        setNewValue(value);
    }, [value]);

    useEffect(() => {
        if (newValue !== value) {
            onSave(newValue);
        }
    }, [newValue]);  

    return (
        <div className="editable-field">
            <textarea
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className='editable-input'
            />
        </div>
    );
};

export default EditableField;
