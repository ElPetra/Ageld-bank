import { EnterPasswordForm, PhoneForm, SmsCodeForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const AuthorizationPage = () => {
    return (
        <MultiStepForm
            variant='login'
            forms={[
                {
                    id: 1,
                    title: 'Войдите в личный кабинет',
                    component: <PhoneForm variant='login' />
                },
                {
                    id: 2,
                    title: 'Введите код из смс',
                    component: <SmsCodeForm variant='login' />
                },
                {
                    id: 3,
                    title: 'Введите пароль',
                    component: <EnterPasswordForm />
                }
            ]}
        />
    );
};
