import {
    CreatePassword,
    MultiStepForm,
    Registration,
    SmsCode
} from 'src/features/multi-step-form';

export const RegistrationPage = () => {
    return (
        <MultiStepForm
            variant={'registration'}
            forms={[
                {
                    id: 1,
                    title: 'Регистрация',
                    component: <Registration />
                },
                {
                    id: 2,
                    title: 'Введите код из смс',
                    component: <SmsCode />
                },
                {
                    id: 3,
                    title: 'Придумайте пароль',
                    component: <CreatePassword />
                }
            ]}
        />
    );
};
