import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Form, Select, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';

import { validationSchemaAdress } from './validateSchema';

import type {
    SubmitHandler,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
import type { Address } from 'src/pages/registration/model/registrationSlice';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const RegistrationAddress = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<Address>({
        resolver: yupResolver(validationSchemaAdress),
        mode: 'onTouched',
        defaultValues: {
            addressTypeId: 0,
            countryCodeISO: '',
            region: '',
            locationType: '',
            location: '',
            streetType: '',
            street: '',
            houseNumber: '',
            litera: '',
            buildingHouseNumber: '',
            apartmentNumber: '',
            postalCode: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = data => {
        const sanitizedData: Address = {
            addressTypeId: data.addressTypeId,
            countryCodeISO: data.countryCodeISO || '',
            region: data.region || '',
            locationType: data.locationType || '',
            location: data.location || '',
            streetType: data.streetType || '',
            street: data.street || '',
            houseNumber: data.houseNumber || '',
            litera: data.litera || '',
            buildingHouseNumber: data.buildingHouseNumber || '',
            apartmentNumber: data.apartmentNumber || '',
            postalCode: data.postalCode || ''
        };

        dispatch(
            setRegistrationData({
                registrationAddress: sanitizedData
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    const countryOptions = [
        { value: 'Российская Федерация', label: 'Российская Федерация' },
        { value: 'Беларусь', label: 'Беларусь' },
        { value: 'Украина', label: 'Украина' },
        { value: 'Армения', label: 'Армения' }
    ];

    const locationTypeOptions = [
        { value: 'Город', label: 'Город' },
        { value: 'Деревня', label: 'Деревня' },
        { value: 'Посёлок', label: 'Посёлок' },
        { value: 'Хутор', label: 'Хутор' }
    ];

    const streetTypeOptions = [
        { value: 'Улица', label: 'Улица' },
        { value: 'Проспект', label: 'Проспект' },
        { value: 'Бульвар', label: 'Бульвар' },
        { value: 'Переулок', label: 'Переулок' }
    ];

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Select
                label='Страна'
                field='countryCodeISO'
                options={countryOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.countryCodeISO?.message}
            />
            <Input
                label='Район'
                field='region'
                size='large'
                register={register}
                placeholder='Укажите район'
                error={errors.region?.message}
            />
            <Select
                label='Тип населенного пункта'
                field='locationType'
                options={locationTypeOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.locationType?.message}
            />
            <Input
                label='Населённый пункт'
                field='location'
                size='large'
                register={register}
                placeholder='Населённый пункт'
                error={errors.location?.message}
            />
            <Select
                label='Тип улицы'
                field='streetType'
                options={streetTypeOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.streetType?.message}
            />
            <Input
                label='Улица'
                field='street'
                size='large'
                register={register}
                placeholder='Улица'
                error={errors.street?.message}
            />
            <div className='form-container-group'>
                <Input
                    label='Номер дома'
                    field='houseNumber'
                    size='large'
                    register={register}
                    placeholder='Номер дома'
                    error={errors.houseNumber?.message}
                />
                <Input
                    label='Литера'
                    field='litera'
                    size='large'
                    register={register}
                    placeholder='Буква'
                    error={errors.litera?.message}
                />
                <Input
                    label='Корпус'
                    field='buildingHouseNumber'
                    size='large'
                    register={register}
                    placeholder='Корпус'
                    error={errors.buildingHouseNumber?.message}
                />
            </div>
            <div className='form-container-group'>
                <Input
                    label='Номер квартиры'
                    field='apartmentNumber'
                    size='large'
                    register={register}
                    placeholder='Номер квартиры'
                    error={errors.apartmentNumber?.message}
                />
                <Input
                    label='Почтовый индекс'
                    field='postalCode'
                    size='large'
                    register={register}
                    placeholder='Почтовый индекс'
                    error={errors.postalCode?.message}
                />
            </div>
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
