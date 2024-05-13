import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Icon, Input } from 'src/shared/ui';

import type { FieldValues } from 'react-hook-form';

interface Props {
    label?: string;
    size?: 'extra-small' | 'small' | 'medium' | 'large';
}

export const SearchForm = ({ label = 'Поиск', size = 'large' }: Props) => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const { register, handleSubmit } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { search: '' }
    });

    return (
        <Form
            onSubmit={handleSubmit(data => {
                console.log(data.search);
            })}
        >
            <Input
                type='text'
                placeholder={label}
                size={size}
                width='max'
                value={value}
                onChange={e => setValue(e.target.value)}
                reference={inputRef}
                label='search'
                register={register}
            >
                <button>
                    <Icon icon='search-icon' />
                </button>
            </Input>
        </Form>
    );
};
