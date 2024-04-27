import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PhoneInput } from 'src/features/inputs';
import { Button, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { getErrorMessage } from 'src/shared/lib';
import {
    localStorageApi,
    useCheckMissRegistrationMutation,
    useCheckRegistrationMutation,
    useGenerateCodeMutation
} from 'src/shared/api';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';

interface Props {
    variant?: 'login' | 'registration' | 'recovery';
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}
export const PhoneForm = ({
    variant = 'login',
    isLast,
    setFormStep
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
    const [checkRegistration, { error: checkRegistrationError }] =
        useCheckRegistrationMutation();
    const [checkMissRegistration, { error: checkMissRegistrationError }] =
        useCheckMissRegistrationMutation();
    const [generateCode, { error: generateCodeError }] =
        useGenerateCodeMutation();
    const handleLinkClick = (linkId: number) => {
        if (!clickedLinks.includes(linkId)) {
            setClickedLinks([...clickedLinks, linkId]);
        }
    };
    const allLinksClicked = clickedLinks.length === 2;
    const onSubmit = (data: FieldValues) => {
        const phone = data.phone.replace(/\D/gm, '');
        if (variant === 'registration') {
            checkMissRegistration(phone)
                .unwrap()
                .then(checkMissRegistrationData => {
                    generateCode(phone)
                        .unwrap()
                        .then(() => {
                            localStorageApi.setCustomerData(
                                phone,
                                checkMissRegistrationData.customerId
                            );
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        });
                });
        }
        if (variant === 'login') {
            checkRegistration(phone)
                .unwrap()
                .then(() =>
                    generateCode(phone)
                        .unwrap()
                        .then(() => {
                            localStorageApi.setUserPhone(phone);
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        })
                );
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                isError={!!errors?.phone}
                error={
                    getErrorMessage(checkRegistrationError) ||
                    getErrorMessage(checkMissRegistrationError) ||
                    getErrorMessage(generateCodeError)
                }
            />
            {variant === 'registration' && (
                <>
                    <Text size='xs'>
                        Нажав кнопку «Далее», вы соглашаетесь с &nbsp;
                        <Link
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
