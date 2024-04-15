import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { EmailInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { getFieldErrorMessage } from 'src/shared/lib';
import { useNewEmailMutation } from 'src/shared/api';

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
    const [newEmail] = useNewEmailMutation();
    const onSubmit = (data: Props) => {
        const token =
            localStorage.getItem('accessToken') ||
            localStorage.getItem('refreshToken');
        if (token && email) {
            newEmail({
                Authorization: token,
                email: data.email
            }).unwrap();
        }
        setIsClicked(false);
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput
                label={'email'}
                register={register}
                error={getFieldErrorMessage(errors.email?.message)}
                value={email || ''}
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
