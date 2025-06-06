import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input, Select } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { useTranslation } from 'react-i18next';

import { formatDate } from 'src/shared/lib';

import { useCitizenshipOptions } from '../model/forms-helpers';

import { validationSchemaPersonalInfo } from './validateSchema';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface PersonalInfoFormValues {
    birthday: string;
    gender: string;
    citizenship: string;
}

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const PersonalInfo = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<PersonalInfoFormValues>({
        resolver: yupResolver(validationSchemaPersonalInfo),
        mode: 'onTouched',
        defaultValues: { birthday: '', gender: '', citizenship: '' }
    });

    const genderOptions = [
        { value: 'М', label: t('Мужской') },
        { value: 'Ж', label: t('Женский') }
    ];

    const onSubmit = (data: PersonalInfoFormValues) => {
        dispatch(
            setRegistrationData({
                ...data,
                birthday: formatDate(data.birthday)
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={t('Дата рождения')}
                field='birthday'
                size='large'
                register={register}
                type='date'
                placeholder={t('Дата рождения')}
                error={errors.birthday?.message}
            />
            <Select
                label={t('Пол')}
                field='gender'
                options={genderOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.gender?.message}
            />
            <Select
                label={t('Гражданство')}
                field='citizenship'
                options={useCitizenshipOptions()}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.citizenship?.message}
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
