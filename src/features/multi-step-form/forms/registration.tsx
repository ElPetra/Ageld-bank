import { useForm } from 'react-hook-form';

import { PhoneInput } from 'src/features/inputs';
import { Button, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { FieldValues } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const Registration = ({ isLast, setFormStep }: Props) => {
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

    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data.phone.replace(/\D/gm, ''));
            })}
        >
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                isError={!!errors?.phone}
            />

            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с &nbsp;
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'termsRBS')}`}
                    variant='action'
                >
                    Правилами пользования СДБО
                </Link>
                &nbsp; и &nbsp;
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'privacyPolicy')}`}
                    variant='action'
                >
                    Политикой конфиденциальности
                </Link>
                &nbsp; и даёте согласие на сбор, обработку и &nbsp;
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'personalDataStorage')}`}
                    variant='action'
                >
                    Хранение ваших персональных данных
                </Link>
            </Text>

            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid}
            >
                Далее
            </Button>
        </Form>
    );
};
