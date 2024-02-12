import React from 'react';
import './InputTemplate.css'; // ייבוא קובץ ה-CSS

const InputTemplate = ({ 
    type = 'text', 
    defaultValue, 
    placeholder, 
    onKeyPress = () => {},
    onChange = () => {},
    error = ''
}) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    const handleKeyDown = (e) => {
        if(onKeyPress) {
            onKeyPress(e.key);
        }
    };

    return (
        <div className="input-container">
            <input
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default InputTemplate;
