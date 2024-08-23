import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import publicContract from 'src/assets/public-contract.pdf';
import { Button, Checkbox, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { EmailInput, PhoneInput } from 'src/features/inputs';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    variant?: 'login' | 'registration' | 'recovery';
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setPhone: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
}
export const PhoneEmailForm = ({
    variant = 'login',
    isLast,
    setFormStep,
    setPhone,
    setEmail
}: Props) => {
    const [clickedLinks, setClickedLinks] = useState<number[]>([]);
    const [isPhone, setIsPhone] = useState<boolean>(true);
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { phone: '', email: '', checkbox: [] }
    });
    const { checkedMissRegistration, checkedRegistration, error } = useAuth();
    const { t } = useTranslation();
    const handleLinkClick = (linkId: number) => {
        if (!clickedLinks.includes(linkId)) {
            setClickedLinks([...clickedLinks, linkId]);
        }
    };
    const allLinksClicked = clickedLinks.length === 1;
    const onSubmit = async (data: FieldValues) => {
        const fieldData = isPhone ? data.phone.replace(/\D/gm, '') : data.email;
        if (isPhone) {
            setPhone(fieldData);
        } else {
            setEmail(fieldData);
        }

        let isError = false;
        if (variant === 'registration') {
            if (await checkedMissRegistration(fieldData)) {
                isError = true;
            }
        }
        if (variant === 'login' || variant === 'recovery') {
            if (await checkedRegistration(fieldData)) {
                isError = true;
            }
        }
        if (!isError && setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='phone-email__menu'>
                <button
                    type='button'
                    className={`phone-email__menu__item ${isPhone && 'active'} `}
                    onClick={() => setIsPhone(true)}
                >
                    <Text size='m' weight='medium' align='center'>
                        {t('Телефон')}
                    </Text>
                </button>
                <button
                    type='button'
                    className={`phone-email__menu__item ${!isPhone && 'active'} `}
                    onClick={() => setIsPhone(false)}
                >
                    <Text size='m' weight='medium' align='center'>
                        Email
                    </Text>
                </button>
            </div>
            {isPhone ? (
                <PhoneInput
                    defaultPhone={getValues('phone')}
                    clear={() => setValue('phone', '')}
                    field='phone'
                    register={register}
                    isError={!!errors?.phone}
                    error={error}
                />
            ) : (
                <EmailInput
                    defaultEmail={getValues('email')}
                    clear={() => setValue('email', '')}
                    field='email'
                    register={register}
                    isError={!!errors?.email}
                    error={error}
                />
            )}
            {variant === 'registration' && (
                <Checkbox register={register} field='checkbox'>
                    <Text>
                        {t('Нажав кнопку "Принять" вы соглашаетесь с текстом')}
                        &nbsp;
                        <Link
                            id='service_rules'
                            onClick={() => handleLinkClick(1)}
                            to={publicContract}
                            target='_blank'
                            rel='noreferrer'
                            variant='action'
                        >
                            {t('Публичного договора')}
                        </Link>
                    </Text>
                </Checkbox>
            )}
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={
                    !isDirty ||
                    !isValid ||
                    (variant === 'registration'
                        ? !allLinksClicked || !watch('checkbox')[0]
                        : false)
                }
            >
                {t('Принять')}
            </Button>
            {variant === 'registration' && (
                <Button size='large' type='button'>
                    <Link to={RouteName.MAIN_PAGE + '/'}>{t('Отклонить')}</Link>
                </Button>
            )}
        </Form>
    );
};
