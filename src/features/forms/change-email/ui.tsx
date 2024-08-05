import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Form } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { EmailInput } from 'src/features/inputs';

import type { FieldValues } from 'react-hook-form';

import './styles.scss';

interface Props {
    email: string;
}
export const EmailForm = ({ email }: Props) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { email: email || '' }
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
                clear={() => setValue('email', '')}
                field='email'
                register={register}
                isError={!!errors?.email}
                error={error}
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
