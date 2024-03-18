import { memo, useState } from 'react';

import './styles.scss';

interface Props {
    label: string;
    handleCheckboxChange: (label: string) => void;
}

export const Checkbox = memo(({ label, handleCheckboxChange }: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked);
        handleCheckboxChange(label);
    };

    return (
        <div className='custom-checkbox'>
            <label>
                <input
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
});
