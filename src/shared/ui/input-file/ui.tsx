import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Icon } from 'src/shared/ui';

import type { InputHTMLAttributes } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    text?: string;
    variant?: 'primary' | 'secondary';
    width?: 'auto' | 'max';
    isError?: boolean;
    error?: string;
    field?: string;
    register?: UseFormRegister<FieldValues>;
}

export const InputFile = memo(
    ({
        label,
        text,
        variant = 'primary',
        width = 'auto',
        isError,
        error,
        field = 'field',
        register,
        ...props
    }: Props) => {
        const { t } = useTranslation();
        const [file, setFile] = useState<null | File>(null);

        const fieldClass = cn('field-file', width, {
            error: error || isError
        });
        const inputEmptyClass = cn('input-file__empty', variant, {
            error: error
        });
        const inputEmptyLableClass = cn('input-file__empty__label', {
            error: error
        });
        const inputFullClass = cn('input-file__full', variant, {
            error: error
        });

        return (
            <div className={fieldClass}>
                {file ? (
                    <div className={inputFullClass}>
                        <div>{file?.name}</div>
                        <button onClick={() => setFile(null)}>
                            <Icon width={24} icon='close' />
                        </button>
                    </div>
                ) : (
                    <label className={inputEmptyClass}>
                        {register ? (
                            <input
                                {...register(field, {
                                    onChange: e =>
                                        setFile(
                                            e.target.files && e.target.files[0]
                                        ),
                                    required: true
                                })}
                                type='file'
                                {...props}
                            />
                        ) : (
                            <input
                                onChange={e =>
                                    setFile(e.target.files && e.target.files[0])
                                }
                                type='file'
                                {...props}
                            />
                        )}
                        <div className={inputEmptyLableClass}>
                            <div>
                                {error || isError ? (
                                    <Icon
                                        width={24}
                                        icon='upload-file-accent'
                                    />
                                ) : (
                                    <Icon width={24} icon='upload-file' />
                                )}
                            </div>
                            <div>{t(label || 'Загрузить файл')}</div>
                        </div>
                        <div className='input-file__empty__text'>
                            {t(text || 'Файлы jpg, png не более 10 МБ')}
                        </div>
                    </label>
                )}
                {error && <div className='field-file__error'>{t(error)}</div>}
            </div>
        );
    }
);
