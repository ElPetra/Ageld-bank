import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';
import {
    ConfirmPasswordForm,
    CodeForm,
    PhoneEmailForm
} from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const RecoveryPasswordPage = () => {
    const [phone, setPhone] = useState<string>('');
    const [, setEmail] = useState<string>('');
    const { t } = useTranslation();

    return (
        <Container>
            <MultiStepForm
                variant='recovery'
                forms={[
                    {
                        id: 1,
                        title: t('Восстановление пароля'),
                        component: (
                            <PhoneEmailForm
                                variant='recovery'
                                setPhone={setPhone}
                                setEmail={setEmail}
                            />
                        )
                    },
                    {
                        id: 2,
                        title: t('Введите код из смс'),
                        component: <CodeForm phone={phone} />
                    },
                    {
                        id: 3,
                        title: t('Придумайте новый пароль'),
                        component: (
                            <ConfirmPasswordForm
                                variant='recovery'
                                phone={phone}
                            />
                        )
                    }
                ]}
            />
        </Container>
    );
};
