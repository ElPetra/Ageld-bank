import { MultiStepForm } from 'src/features/multi-step-form';
import {
    PhoneForm,
    SmsCodeForm,
    ConfirmPasswordForm
} from 'src/features/forms';

export const RegistrationPage = () => {
    return (
        <MultiStepForm
            variant={'registration'}
            forms={[
                {
                    id: 1,
                    title: 'Регистрация',
                    component: <PhoneForm />
                },
                {
                    id: 2,
                    title: 'Введите код из смс',
                    component: <SmsCodeForm />
                },
                {
                    id: 3,
                    title: 'Придумайте пароль',
                    component: <ConfirmPasswordForm />
                }
            ]}
        />
    );
};
