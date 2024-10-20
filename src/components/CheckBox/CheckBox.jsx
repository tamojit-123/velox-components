import React from 'react';
import './CheckBox.css';

const CheckBox = () => {
    return (
        <div className="checkbox-container">
            <label className="glass-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Agree to terms and conditions
            </label>
        </div>
    );
};

export default CheckBox;
