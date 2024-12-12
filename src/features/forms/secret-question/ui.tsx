import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';

import { validationSchemaSecret } from './validateSchema';

import type { Dispatch, SetStateAction } from 'react';

interface SecretQuestionFormFields {
    secretQuestion: string;
    secretAnswer: string;
}

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const SecretQuestion = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<SecretQuestionFormFields>({
        resolver: yupResolver(validationSchemaSecret),
        mode: 'onTouched',
        defaultValues: {
            secretQuestion: '',
            secretAnswer: ''
        }
    });

    const onSubmit = (data: SecretQuestionFormFields) => {
        dispatch(
            setRegistrationData({
                secretQuestion: data.secretQuestion,
                secretAnswer: data.secretAnswer
            })
        );

        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Секретный вопрос'
                field='secretQuestion'
                size='large'
                register={register}
                placeholder='Введите секретный вопрос'
                error={errors.secretQuestion?.message}
            />
            <Input
                label='Ответ на секретный вопрос'
                field='secretAnswer'
                size='large'
                register={register}
                placeholder='Введите ответ'
                error={errors.secretAnswer?.message}
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
