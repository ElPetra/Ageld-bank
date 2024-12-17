import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Form, Select, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
            microdistrict: '',
            houseNumber: '',
            litera: '',
            buildingNumberHouse: '',
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
            microdistrict: data.microdistrict || '',
            houseNumber: data.houseNumber || '',
            litera: data.litera || '',
            buildingNumberHouse: data.buildingNumberHouse || '',
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
        { value: 'Российская Федерация', label: t('Российская Федерация') },
        { value: 'Беларусь', label: t('Беларусь') },
        { value: 'Украина', label: t('Украина') },
        { value: 'Армения', label: t('Армения') }
    ];

    const locationTypeOptions = [
        { value: 'Город', label: t('Город') },
        { value: 'Деревня', label: t('Деревня') },
        { value: 'Посёлок', label: t('Посёлок') },
        { value: 'Хутор', label: t('Хутор') }
    ];

    const streetTypeOptions = [
        { value: 'Улица', label: t('Улица') },
        { value: 'Проспект', label: t('Проспект') },
        { value: 'Бульвар', label: t('Бульвар') },
        { value: 'Переулок', label: t('Переулок') }
    ];

    const microdistrictOptions = [
        { value: 'Центральный', label: t('Центральный') },
        { value: 'Южный', label: t('Южный') },
        { value: 'Западный', label: t('Западный') },
        { value: 'Восточный', label: t('Восточный') }
    ];

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Select
                label={t('Страна')}
                field='countryCodeISO'
                options={countryOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.countryCodeISO?.message}
            />
            <Input
                label={t('Район')}
                field='region'
                size='large'
                register={register}
                placeholder={t('Укажите район')}
                error={errors.region?.message}
            />
            <Select
                label={t('Тип населенного пункта')}
                field='locationType'
                options={locationTypeOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.locationType?.message}
            />
            <Input
                label={t('Населённый пункт')}
                field='location'
                size='large'
                register={register}
                placeholder={t('Населённый пункт')}
                error={errors.location?.message}
            />
            <Select
                label={t('Тип улицы')}
                field='streetType'
                options={streetTypeOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.streetType?.message}
            />
            <Input
                label={t('Улица')}
                field='street'
                size='large'
                register={register}
                placeholder={t('Улица')}
                error={errors.street?.message}
            />
            <Select
                label={t('Микрорайон')}
                field='microdistrict'
                options={microdistrictOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.microdistrict?.message}
            />
            <div className='form-container-group'>
                <Input
                    label={t('Номер дома')}
                    field='houseNumber'
                    size='large'
                    register={register}
                    placeholder={t('Номер дома')}
                    error={errors.houseNumber?.message}
                />
                <Input
                    label={t('Литера')}
                    field='litera'
                    size='large'
                    register={register}
                    placeholder={t('Буква')}
                    error={errors.litera?.message}
                />
                <Input
                    label={t('Корпус')}
                    field='buildingNumberHouse'
                    size='large'
                    register={register}
                    placeholder={t('Корпус')}
                    error={errors.buildingNumberHouse?.message}
                />
            </div>
            <div className='form-container-group'>
                <Input
                    label={t('Номер квартиры')}
                    field='apartmentNumber'
                    size='large'
                    register={register}
                    placeholder={t('Номер квартиры')}
                    error={errors.apartmentNumber?.message}
                />
                <Input
                    label={t('Почтовый индекс')}
                    field='postalCode'
                    size='large'
                    register={register}
                    placeholder={t('Почтовый индекс')}
                    error={errors.postalCode?.message}
                />
            </div>
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
