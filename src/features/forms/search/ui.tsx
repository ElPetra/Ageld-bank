import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form, Icon, Input } from 'src/shared/ui';

import type { FieldValues } from 'react-hook-form';

interface Props {
    label?: string;
    size?: 'extra-small' | 'small' | 'medium' | 'large';
}

export const SearchForm = ({ label, size = 'large' }: Props) => {
    const { t } = useTranslation();
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
                placeholder={label || t('Поиск')}
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
