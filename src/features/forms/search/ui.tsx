import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form, Icon, Input } from 'src/shared/ui';

import type { FieldValues } from 'react-hook-form';

interface Props {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    onSubmit?: (data: string) => void;
}

export const SearchForm = ({ label, size = 'large', onSubmit }: Props) => {
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
                if (onSubmit) {
                    onSubmit(data.search);
                }
            })}
        >
            <Input
                type='text'
                label={label || t('Поиск')}
                size={size}
                width='max'
                value={value}
                onChange={e => setValue(e.target.value)}
                reference={inputRef}
                field='search'
                register={register}
            >
                <button>
                    <Icon icon='search' />
                </button>
            </Input>
        </Form>
    );
};
