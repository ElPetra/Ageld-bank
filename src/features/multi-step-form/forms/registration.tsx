import { useForm } from 'react-hook-form';

import { PhoneInput } from 'src/features/inputs';
<<<<<<< Updated upstream
import { Button, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
=======
import { Button, Form } from 'src/shared/ui';

import { useForm } from 'react-hook-form';

import { PrivacyPolicyText } from 'src/widgets/privacyPolicyText';
>>>>>>> Stashed changes

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
                console.log(data);
            })}
        >
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                isError={!!errors?.phone}
            />
<<<<<<< Updated upstream
            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с и Политикой
                конфиденциальности &nbsp;
                <Link to={RouteName.PUBLIC_CONTRACT_PAGE} variant='action'>
                    Правилами пользования СДБО
                </Link>
                &nbsp; и даёте согласие на сбор, обработку и &nbsp;
                <Link to={RouteName.PUBLIC_CONTRACT_PAGE} variant='action'>
                    Хранение ваших персональных данных
                </Link>
            </Text>
=======
            <PrivacyPolicyText />
>>>>>>> Stashed changes
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
