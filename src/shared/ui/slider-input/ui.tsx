import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary';
    label: string;
    min: number;
    max: number;
    unit: string;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    inputField: string;
    sliderField: string;
}

export const SliderInput = ({
    variant = 'primary',
    label,
    min,
    max,
    unit,
    register,
    setValue,
    inputField,
    sliderField,
    ...props
}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (setValue && inputField && sliderField) {
            setValue(inputField, Number(value), { shouldValidate: true });
            setValue(sliderField, Number(value));
        }
    };

    return (
        <div className='slider-input'>
            <label>{label}</label>
            <div className='slider-input__inputs'>
                <div className='slider-input__input'>
                    <div className={variant}>
                        <input
                            {...(register &&
                                inputField &&
                                register(inputField, {
                                    required: true,
                                    min,
                                    max
                                }))}
                            type='number'
                            onChange={handleChange}
                            {...props}
                        />
                    </div>
                    <span>{unit}</span>
                </div>
                <div className='slider-input__slider'>
                    <div className='slider-input__slider__input'>
                        <input
                            {...(register &&
                                sliderField &&
                                register(sliderField, {
                                    required: true,
                                    min,
                                    max
                                }))}
                            type='range'
                            onChange={handleChange}
                            min={min}
                            max={max}
                            {...props}
                        />
                    </div>
                    <div className='slider-input__slider__min-max'>
                        <span>{min.toLocaleString()}</span>
                        <span>{max.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
