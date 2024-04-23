import { Container } from 'src/shared/ui';
import {
    ConfirmPasswordForm,
    PhoneForm,
    SmsCodeForm
} from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const RecoveryPasswordPage = () => {
    return (
        <Container>
            <MultiStepForm
                variant='recovery'
                forms={[
                    {
                        id: 1,
                        title: 'Восстановление пароля',
                        component: <PhoneForm variant='recovery' />
                    },
                    {
                        id: 2,
                        title: 'Введите код из смс',
                        component: <SmsCodeForm variant='registration' />
                    },
                    {
                        id: 3,
                        title: 'Придумайте новый пароль',
                        component: <ConfirmPasswordForm type='recovery' />
                    }
                ]}
            />
        </Container>
    );
};
