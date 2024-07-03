import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from 'src/entities/user';
import { Button, Checkbox, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { useTranslation } from 'react-i18next';

import { PhoneInput } from './phone-input';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    variant?: 'login' | 'registration' | 'recovery';
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setPhone: Dispatch<SetStateAction<string>>;
}
export const PhoneForm = ({
    variant = 'login',
    isLast,
    setFormStep,
    setPhone
}: Props) => {
    const [clickedLinks, setClickedLinks] = useState<number[]>([]);
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { phone: '', checkbox: [] }
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
        const phone: string = data.phone.replace(/\D/gm, '');
        setPhone(phone);
        let isError = false;
        if (variant === 'registration') {
            if (await checkedMissRegistration(phone)) {
                isError = true;
            }
        }
        if (variant === 'login' || variant === 'recovery') {
            if (await checkedRegistration(phone)) {
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
            <PhoneInput
                clear={() => setValue('phone', '')}
                label='phone'
                register={register}
                isError={!!errors?.phone}
                error={error}
            />
            {variant === 'registration' && (
                <Checkbox register={register} field='checkbox'>
                    <Text>
                        {t('Нажав кнопку "Принять" вы соглашаетесь с текстом')}
                        &nbsp;
                        <Link
                            id='service_rules'
                            onClick={() => handleLinkClick(1)}
                            to={
                                RouteName.MAIN_PAGE +
                                '/src/assets/terms-RBS.pdf'
                            }
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
                    <Link to={RouteName.MAIN_PAGE}>{t('Отклонить')}</Link>
                </Button>
            )}
        </Form>
    );
};
