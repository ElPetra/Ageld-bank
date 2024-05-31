import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';
import { PhoneForm, CodeForm, ConfirmPasswordForm } from 'src/features/forms';

export const RegistrationPage = () => {
    const [phone, setPhone] = useState<string>('');
    const { t } = useTranslation();

    return (
        <Container>
            <MultiStepForm
                variant='registration'
                forms={[
                    {
                        id: 1,
                        title: t('Регистрация'),
                        component: (
                            <PhoneForm
                                variant='registration'
                                setPhone={setPhone}
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
                        title: t('Придумайте пароль'),
                        component: (
                            <ConfirmPasswordForm
                                variant='registration'
                                phone={phone}
                            />
                        )
                    },
                    {
                        id: 4,
                        title: '',
                        component: (
                            <MessageCard
                                icon='paper-airplane-lady'
                                width={400}
                                title={t(
                                    'Кабинет пользователя успешно \n зарегистрирован'
                                )}
                                buttonText={t('Войти в кабинет')}
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
