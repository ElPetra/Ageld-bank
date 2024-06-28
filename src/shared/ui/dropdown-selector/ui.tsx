import React from 'react';
import { useForm } from 'react-hook-form';

import type { SubmitHandler } from 'react-hook-form';
interface IFormInput {
    capitalzation: string;
}

interface DropdownOption {
    value: string;
    label: string;
}

export const DropdownSelector = () => {
    const { register, handleSubmit, setValue } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    };

    const capitalizationOptions: DropdownOption[] = [
        { value: 'Капитализация', label: 'Капитализация' },
        { value: 'Капитализация', label: 'Капитализация' },
        { value: 'Капитализация', label: 'Капитализация' }
    ];

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setValue('capitalzation', event.target.value);
        handleSubmit(onSubmit)();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='capitalization'>Капитализация</label>
                <select
                    id='capitalzation'
                    {...register('capitalzation')}
                    onChange={handleSelectChange}
                >
                    <option value='Капитализация'>Капитализация</option>
                    {capitalizationOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};
