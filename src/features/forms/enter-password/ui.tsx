import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { PasswordInput } from 'src/features/inputs';
import { useAuth } from 'src/entities/user';
import { Button, Form } from 'src/shared/ui';

import { RouteName } from 'src/shared/model';
import i18n from 'src/shared/model/i18n';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    phone: string;
}

export const EnterPasswordForm = ({ isLast, setFormStep, phone }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { password: '' }
    });
    const navigate = useNavigate();
    const { signedIn, error } = useAuth();

    const onSubmit = async (data: FieldValues) => {
        const error = await signedIn(phone, data.password);
        if (!error) {
            navigate(RouteName.MAIN_PAGE + '/');
        }
        if (!error && setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput register={register} label='password' error={error} />
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid}
            >
                {i18n.t('Продолжить')}
            </Button>
        </Form>
    );
};
