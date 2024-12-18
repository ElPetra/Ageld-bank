import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    PasswordForm
    // ActualAddress
} from 'src/features/forms';

import Welcome from './welcome';

export const RegistrationPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const { t } = useTranslation();

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
                        // На данный момент не актуально
                        // {
                        //     id: 6,
                        //     title: t('Введите адрес проживания'),
                        //     component: <ActualAddress />
                        // },
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
                        },
                        {
                            id: 11,
                            title: '',
                            component: (
                                <MessageCard
                                    icon='failure-lady'
                                    width={400}
                                    title={t('Произошла ошибка')}
                                    buttonText={t('Вернуться на главную')}
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
