import { useForm } from 'react-hook-form';
import { Button, Form, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { validationSchemaFullName } from './validateSchema';

import type { SubmitHandler } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface FormData {
    lastName: string;
    firstName: string;
    middleName: string;
}

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const FullName = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm<FormData>({
        mode: 'onTouched',
        resolver: yupResolver(validationSchemaFullName),
        defaultValues: { lastName: '', firstName: '', middleName: '' }
    });

    const onSubmit: SubmitHandler<FormData> = data => {
        dispatch(
            setRegistrationData({
                firstName: data.firstName,
                lastName: data.lastName,
                middleName: data.middleName
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={t('Фамилия')}
                field='lastName'
                size='large'
                register={register}
                error={errors.lastName?.message || ''}
            />
            <Input
                label={t('Имя')}
                field='firstName'
                size='large'
                register={register}
                error={errors.firstName?.message || ''}
            />
            <Input
                label={t('Отчество')}
                field='middleName'
                size='large'
                register={register}
                error={errors.middleName?.message || ''}
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isValid}
            >
                {t('Продолжить')}
            </Button>
        </Form>
    );
};
