import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from 'src/entities/user';
import { Button, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

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
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { phone: '' }
    });
    const { checkedMissRegistration, checkedRegistration, error } = useAuth();

    const handleLinkClick = (linkId: number) => {
        if (!clickedLinks.includes(linkId)) {
            setClickedLinks([...clickedLinks, linkId]);
        }
    };
    const allLinksClicked = clickedLinks.length === 2;
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
                <>
                    <Text size='xs'>
                        Нажав кнопку «Далее», вы соглашаетесь с &nbsp;
                        <Link
                            id='service_rules'
                            onClick={() => handleLinkClick(1)}
                            to={
                                RouteName.MAIN_PAGE + 'src/assets/terms-RBS.pdf'
                            }
                            target='_blank'
                            rel='noreferrer'
                            variant='action'
                        >
                            Правилами дистанционного банковского обслуживания
                        </Link>
                        &nbsp; и &nbsp;
                        <Link
                            id='privacy_policy'
                            to={
                                RouteName.MAIN_PAGE + 'src/assets/terms-RBS.pdf'
                            }
                            onClick={() => handleLinkClick(2)}
                            target='_blank'
                            rel='noreferrer'
                            variant='action'
                        >
                            Политикой конфиденциальности
                        </Link>
                        &nbsp; и даёте согласие на сбор и обработку информации
                    </Text>
                    <Button variant='secondary' size='large' type='button'>
                        <Link to={RouteName.MAIN_PAGE}>Отклонить</Link>
                    </Button>
                </>
            )}
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={
                    !isDirty ||
                    !isValid ||
                    (variant === 'registration' ? !allLinksClicked : false)
                }
            >
                Далее
            </Button>
        </Form>
    );
};
