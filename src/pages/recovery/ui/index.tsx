import { useState } from 'react';

import { Container } from 'src/shared/ui';
import {
    ConfirmPasswordForm,
    PhoneForm,
    SmsCodeForm
} from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const RecoveryPasswordPage = () => {
    const [phone, setPhone] = useState<string>('');

    return (
        <Container>
            <MultiStepForm
                variant='recovery'
                forms={[
                    {
                        id: 1,
                        title: 'Восстановление пароля',
                        component: (
                            <PhoneForm variant='recovery' setPhone={setPhone} />
                        )
                    },
                    {
                        id: 2,
                        title: 'Введите код из смс',
                        component: <SmsCodeForm phone={phone} />
                    },
                    {
                        id: 3,
                        title: 'Придумайте новый пароль',
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
