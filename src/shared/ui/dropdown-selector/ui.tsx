import { useForm } from 'react-hook-form';
import Select from 'react-select';
import cn from 'classnames';
import { Icon } from '../icon';
import './styles.scss';
import type { InputHTMLAttributes } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { DropdownArrow } from './dropdown-arrow';

interface IFormInput {
    capitalzation: string;
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    label?: string;
}

interface DropdownOption {
    value: string;
    label: string;
}

export const DropdownSelector = ({
    size = 'medium',
    width = 'auto',
    error,
    isError,
    disabled
}: Props) => {
    const { register, handleSubmit, setValue } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
    };

    const capitalizationOptions: DropdownOption[] = [
        { value: 'Капитализация1', label: 'Капитализация1' },
        { value: 'Капитализация2', label: 'Капитализация2' },
        { value: 'Капитализация3', label: 'Капитализация3' }
    ];

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setValue('capitalzation', event.target.value);
        handleSubmit(onSubmit)();
    };

    const fieldClass = cn('field', size, width, {
        error: error || isError
    });

    const selectContainerClass = cn('select-container', size, width, {
        error: error || isError,
        disabled: disabled
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={selectContainerClass}>
                <label htmlFor='capitalization'>Капитализация</label>
                <Select
                    components={{
                        DropdownIndicator: () => <DropdownArrow />
                    }}
                    options={capitalizationOptions}
                    styles={{
                        container: baseStyles => ({
                            ...baseStyles,
                            width: '576px'
                        }),
                        valueContainer: baseStyles => ({
                            ...baseStyles,
                            height: '72px'
                        }),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'grey' : 'red'
                        }),
                        option: baseStyles => ({
                            ...baseStyles,
                            width: '576px',
                            height: '72px'
                        }),
                        indicatorSeparator: () => ({
                            display: 'none'
                        }),
                        dropdownIndicator: (baseStyles, state) => ({
                            ...baseStyles,
                            width: '24',
                            height: '24',
                            transition: 'all .2s ease',
                            transform: state.selectProps.menuIsOpen
                                ? 'rotate(180deg)'
                                : ''
                        })
                    }}
                />
            </div>
        </form>
    );
};
