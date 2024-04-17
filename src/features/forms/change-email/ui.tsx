import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { EmailInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { getErrorMessage, getFieldErrorMessage } from 'src/shared/lib';

import { getAccessToken, useNewEmailMutation } from 'src/shared/api';

import type { FieldValues } from 'react-hook-form';

import './styles.scss';

const schema = yup
    .object()
    .shape({
        email: yup
            .string()
            .matches(
                /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                'Email должен быть валидным'
            )
            .min(8, 'Email должен содержать от 8 до 50 символов')
            .max(50, 'Email должен содержать от 8 до 50 символов')
            .required()
    })
    .required();

interface Props {
    email?: string;
}
export const EmailForm = ({ email }: Props) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { email: email || '' },
        resolver: yupResolver<FieldValues>(schema)
    });
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isSend, setIsSend] = useState<boolean>(false);
    const [newEmail, { error: newEmailError }] = useNewEmailMutation();

    const onSubmit = (data: Props) => {
        const token = getAccessToken();
        if (token && data.email) {
            newEmail({
                Authorization: token,
                email: data.email
            })
                .unwrap()
                .then(() => {
                    setIsClicked(false);
                });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput
                label={'email'}
                register={register}
                error={
                    isSend
                        ? getFieldErrorMessage(errors.email?.message) ||
                          getErrorMessage(newEmailError)
                        : ''
                }
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
                            setValue('email', email || '');
                            setIsClicked(false);
                            setIsSend(false);
                        }}
                    >
                        Отменить
                    </Button>
                    <Button
                        variant='secondary'
                        size='large'
                        width='max'
                        type='submit'
                        disabled={!isDirty || !isValid}
                        onClick={() => {
                            setIsSend(true);
                        }}
                    >
                        Сохранить
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
                    {email ? 'Изменить' : 'Добавить'}
                </Button>
            )}
        </Form>
    );
};
