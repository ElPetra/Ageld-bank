import Select from 'react-select';
import cn from 'classnames';

import { useRef } from 'react';

import './styles.scss';

import type { InputHTMLAttributes } from 'react';

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
    // const { handleSubmit, setValue } = useForm<IFormInput>();
    // const onSubmit: SubmitHandler<IFormInput> = data => {
    //     console.log(data);
    // };
    const selectRef = useRef(null);
    const capitalizationOptions: DropdownOption[] = [
        {
            value: 'Без капитализации процентов',
            label: 'Без капитализации процентов'
        },
        {
            value: 'Ежедневная капитализация процентов',
            label: 'Ежедневная капитализации процентов'
        },
        {
            value: 'Ежемесячная капитализация процентов',
            label: 'Ежемесячная капитализации процентов'
        },
        {
            value: 'Ежеквартальная капитализация процентов',
            label: 'Ежеквартальная капитализации процентов'
        },
        {
            value: 'Полугодовая капитализация процентов',
            label: 'Полугодовая капитализации процентов'
        },
        {
            value: 'Ежегодная капитализация процентов',
            label: 'Ежегодная капитализация процентов'
        }
    ];

    // const handleSelectChange = (
    //     event: React.ChangeEvent<HTMLSelectElement>
    // ) => {
    //     setValue('capitalzation', event.target.value);
    //     handleSubmit(onSubmit)();
    // };

    const selectContainerClass = cn('select-container', size, width, {
        error: error || isError,
        disabled: disabled
    });

    return (
        <form
        // onSubmit={
        //     handleSubmit(onSubmit)}
        >
            <div className={selectContainerClass}>
                <label htmlFor='capitalization'>Капитализация</label>
                <Select
                    ref={selectRef}
                    // onChange={(e:SingleValue<ChangeEvent<HTMLSelectElement>>)=>
                    //     handleSelectChange(e)
                    // }}
                    placeholder='Выберите капитализацию'
                    options={capitalizationOptions}
                    styles={{
                        container: baseStyles => ({
                            ...baseStyles,
                            width: '50%',
                            '@media (max-width: 1100px)': {
                                maxWidth: '380px',
                                width: 'unset'
                            },
                            '@media (max-width: 600px)': {
                                maxWidth: '300px',
                                width: 'unset'
                            }
                        }),
                        valueContainer: baseStyles => ({
                            ...baseStyles,
                            height: '72px'
                        }),
                        option: baseStyles => ({
                            ...baseStyles,
                            height: '72px',
                            width: '50%',
                            '@media only screen and (max-width: 1100px)': {
                                maxWidth: '380px',
                                width: 'unset'
                            },
                            '@media (max-width: 600px)': {
                                maxWidth: '300px',
                                width: 'unset'
                            }
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
