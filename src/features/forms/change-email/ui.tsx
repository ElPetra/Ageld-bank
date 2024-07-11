import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { useAuth } from 'src/entities/user';
import { Button, Form } from 'src/shared/ui';
import { getFieldErrorMessage } from 'src/shared/lib';
import i18n from 'src/shared/model/i18n';

import { EmailInput } from './email-input';

import type { FieldValues } from 'react-hook-form';

import './styles.scss';

const schema = yup
    .object()
    .shape({
        email: yup
            .string()
            .matches(
                /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                i18n.t('Email должен быть валидным')
            )
            .min(8, i18n.t('Email должен содержать от 8 до 50 символов'))
            .max(50, i18n.t('Email должен содержать от 8 до 50 символов'))
            .required()
    })
    .required();

interface Props {
    email: string;
}
export const EmailForm = ({ email }: Props) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { email: email || '' },
        resolver: yupResolver<FieldValues>(schema)
    });
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const { changedEmail, addedEmail, error, setError } = useAuth();

    const onSubmit = async (data: FieldValues) => {
        if (email) {
            await changedEmail(data.email);
        } else {
            await addedEmail(data.email);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput
                field='email'
                register={register}
                error={t(getFieldErrorMessage(errors.email?.message)) || error}
                value={email || ''}
                disabled={!isClicked}
            />
            {isClicked ? (
                <div className='email_buttons'>
                    <Button
                        variant='primary'
                        size='large'
                        width='max'
                        type='submit'
                        onClick={() => {
                            reset();
                            setError('');
                            setIsClicked(false);
                        }}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        variant='secondary'
                        size='large'
                        width='max'
                        type='submit'
                        disabled={!isDirty || !isValid}
                    >
                        {t('Сохранить')}
                    </Button>
                </div>
            ) : (
                <Button
                    variant='secondary'
                    size='large'
                    width='max'
                    type='submit'
                    onClick={() => setIsClicked(true)}
                >
                    {email ? t('Изменить') : t('Добавить')}
                </Button>
            )}
        </Form>
    );
};
