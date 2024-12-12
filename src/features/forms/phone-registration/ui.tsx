import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import publicContract from 'src/assets/public-contract.pdf';
import { Button, Checkbox, Form, Link, Text, Input } from 'src/shared/ui';
import { PhoneInput } from 'src/features/inputs';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchemaPhoneRegistration } from './validateSchema';

import type { Dispatch, SetStateAction } from 'react';
import type * as reactHookForm from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const PhoneRegistration = ({ isLast, setFormStep }: Props) => {
    const [clickedLinks, setClickedLinks] = useState<number[]>([]);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors }
    } = useForm({
        mode: 'onTouched',
        defaultValues: { phone: '', email: '', checkbox: [] },
        resolver: yupResolver(validationSchemaPhoneRegistration)
    });

    const handleLinkClick = (linkId: number) => {
        if (!clickedLinks.includes(linkId)) {
            setClickedLinks([...clickedLinks, linkId]);
        }
    };

    const allLinksClicked = clickedLinks.length === 1;

    const onSubmit: reactHookForm.SubmitHandler<reactHookForm.FieldValues> = (data) => {
        const phone = data.phone.replace(/\D/g, '');
        dispatch(
            setRegistrationData({
                phoneNumber: phone,
                email: data.email
            })
        );

        if (setFormStep && !isLast) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PhoneInput
                clear={() => setValue('phone', '')}
                field="phone"
                register={register}
                isError={!!errors.phone}
            />

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <div>
                        <Input
                            {...field}
                            label={t('Email')}
                            field="email"
                            register={register}
                            size="large"
                            type="email"
                            placeholder={t('Введите ваш email')}
                            isError={!!errors.email}
                        />
                        {errors.email && (
                            <Text color="error" size="xxs">
                                {errors.email.message}
                            </Text>
                        )}
                    </div>
                )}
            />

            <Checkbox register={register} field="checkbox">
                <Text>
                    {t('Нажав кнопку "Принять" вы соглашаетесь с текстом')}
                    &nbsp;
                    <Link
                        id="service_rules"
                        onClick={() => handleLinkClick(1)}
                        to={publicContract}
                        target="_blank"
                        rel="noreferrer"
                        variant="action"
                    >
                        {t('Публичного договора')}
                    </Link>
                </Text>
            </Checkbox>

            <Button
                variant="secondary"
                size="large"
                type="submit"
                disabled={!allLinksClicked || !watch('checkbox')[0]}
            >
                {t('Продолжить')}
            </Button>

            <Button size="large" type="button">
                <Link to="/">{t('Отклонить')}</Link>
            </Button>
        </Form>
    );
};