import { useForm } from 'react-hook-form';

import { EmailInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';

import { useState } from 'react';

import type { FieldValues } from 'react-hook-form';

import './styles.scss';

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
        defaultValues: { email: email || '' }
    });
    const [isClicked, setIsClicked] = useState<boolean>(false);

    return (
        <Form
            onSubmit={handleSubmit(data => {
                console.log(data.phone.replace(/\D/gm, ''));
            })}
        >
            <EmailInput
                label={'email'}
                register={register}
                isError={!!errors?.email}
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
