import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Select } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { useTranslation } from 'react-i18next';

import { validationSchemaMaritalStatus } from './validateSchema';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

interface MaritalStatusFormValues {
    familyStatusCode: number;
    childCount: number;
}

export const MaritalStatus = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<MaritalStatusFormValues>({
        resolver: yupResolver(validationSchemaMaritalStatus),
        mode: 'onTouched',
        defaultValues: {
            familyStatusCode: 0,
            childCount: 0
        }
    });

    const maritalStatusOptions = [
        { value: '1', label: t('Никогда не состоял(-а) в браке') },
        { value: '2', label: t('Состою в зарегистрированном браке') },
        { value: '3', label: t('Сожительство') },
        { value: '4', label: t('Вдова (вдовец)') }
    ];

    const childrenOptions = [
        { value: '0', label: t('Нет детей') },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' }
    ];

    const onSubmit = (data: MaritalStatusFormValues) => {
        dispatch(
            setRegistrationData({
                familyStatusCode: Number(data.familyStatusCode),
                childCount: Number(data.childCount)
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Select
                label={t('Семейное положение')}
                field='familyStatusCode'
                options={maritalStatusOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.familyStatusCode?.message}
            />
            <Select
                label={t('Дети')}
                field='childCount'
                options={childrenOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.childCount?.message}
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
