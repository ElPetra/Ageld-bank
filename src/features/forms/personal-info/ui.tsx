import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input, Select } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';

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
        { value: 'Мужской', label: 'Мужской' },
        { value: 'Женский', label: 'Женский' }
    ];

    const citizenshipOptions = [
        { value: 'Российская Федерация', label: 'Российская Федерация' },
        { value: 'Беларусь', label: 'Беларусь' },
        { value: 'Украина', label: 'Украина' },
        { value: 'Армения', label: 'Армения' }
    ];

    const onSubmit = (data: PersonalInfoFormValues) => {
        dispatch(
            setRegistrationData({
                birthday: data.birthday,
                gender: data.gender,
                citizenship: data.citizenship
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Дата рождения'
                field='birthday'
                size='large'
                register={register}
                type='date'
                placeholder='Дата рождения'
                error={errors.birthday?.message}
            />
            <Select
                label='Пол'
                field='gender'
                options={genderOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.gender?.message}
            />
            <Select
                label='Гражданство'
                field='citizenship'
                options={citizenshipOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.citizenship?.message}
            />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isValid}
            >
                Продолжить
            </Button>
        </Form>
    );
};
