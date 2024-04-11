import { useState } from 'react';

import './styles.scss';

interface Props {
    label: string;
    defaultIsChecked?: boolean;
    onCheckbox?: () => void;
}

export const Checkbox = ({ label, defaultIsChecked, onCheckbox }: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(
        defaultIsChecked || false
    );

    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (onCheckbox) {
            onCheckbox();
        }
    };

    return (
        <div className='custom-checkbox'>
            <label className='custom-checkbox__label'>
                <input
                    className='custom-checkbox__input'
                    type='checkbox'
                    value={label}
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                <span className='custom-checkbox__control'></span>
                {label}
            </label>
        </div>
    );
};
