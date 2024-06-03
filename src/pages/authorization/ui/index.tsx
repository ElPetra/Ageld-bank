import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';
import { EnterPasswordForm, PhoneForm, CodeForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const AuthorizationPage = () => {
    const [phone, setPhone] = useState<string>('');
    const { t } = useTranslation();

    return (
        <Container>
            <MultiStepForm
                variant='login'
                forms={[
                    {
                        id: 1,
                        title: t('Войдите в личный кабинет'),
                        component: (
                            <PhoneForm variant='login' setPhone={setPhone} />
                        )
                    },
                    {
                        id: 2,
                        title: t('Введите код из смс'),
                        component: <CodeForm phone={phone} />
                    },
                    {
                        id: 3,
                        title: t('Введите пароль'),
                        component: <EnterPasswordForm phone={phone} />
                    }
                ]}
            />
        </Container>
    );
};
