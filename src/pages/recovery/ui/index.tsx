import {
    ConfirmPasswordForm,
    PhoneForm,
    SmsCodeForm
} from 'src/features/forms/index.js';
import { MultiStepForm } from 'src/features/multi-step-form/index.js';

export const RecoveryPasswordPage = () => {
    return (
        <MultiStepForm
            variant={'recovery'}
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
                    title: 'Придумайте пароль',
                    component: <ConfirmPasswordForm variant='recovery' />
                }
            ]}
        />
    );
};
