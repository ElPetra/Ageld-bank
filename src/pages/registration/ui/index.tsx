import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'; // временно для отладки

import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';

import {
    PhoneRegistration,
    FullName,
    PersonalInfo,
    MaritalStatus,
    RegistrationAddress,
    SecretQuestion,
    DocumentForm,
    PasswordForm,
    ActualAddress
} from 'src/features/forms';

import Welcome from './welcome';

import type { RootState } from 'src/app/store/store'; // временно для отладки

export const RegistrationPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const { t } = useTranslation();

    const registrationData = useSelector(
        (state: RootState) => state.registration
    );
    // блок временно для отладки
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('Registration Data:', registrationData);
    }, [registrationData]);
    // блок временно для отладки

    return (
        <Container>
            {!showForm && <Welcome setShowForm={setShowForm} />}
            {showForm && (
                <MultiStepForm
                    variant='registration'
                    forms={[
                        {
                            id: 1,
                            title: t('Введите контактные данные'),
                            component: <PhoneRegistration />
                        },
                        {
                            id: 2,
                            title: t('Введите ваше ФИО'),
                            component: <FullName />
                        },
                        {
                            id: 3,
                            title: t('Введите информацию о себе'),
                            component: <PersonalInfo />
                        },
                        {
                            id: 4,
                            title: t('Введите семейное положение'),
                            component: <MaritalStatus />
                        },
                        {
                            id: 5,
                            title: t('Введите адрес регистрации'),
                            component: <RegistrationAddress />
                        },
                        {
                            id: 6,
                            title: t('Введите адрес проживания'),
                            component: <ActualAddress />
                        },
                        {
                            id: 7,
                            title: t('Введите секретный вопрос'),
                            component: <SecretQuestion />
                        },
                        {
                            id: 8,
                            title: t('Введите паспортные данные'),
                            component: <DocumentForm />
                        },
                        {
                            id: 9,
                            title: t('Придумайте пароль'),
                            component: <PasswordForm />
                        },
                        {
                            id: 10,
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
            )}
        </Container>
    );
};
