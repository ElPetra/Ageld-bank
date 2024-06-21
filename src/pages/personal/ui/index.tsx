import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import i18n from 'src/shared/model/i18n';

import { Link, Container, Preloader } from 'src/shared/ui';
import { useGetInfoQuery } from 'src/shared/api';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { PersonalRouteName, RouteName } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { CheckboxGroup } from 'src/entities/filter';
import { Menu } from 'src/features/menu';
import { ChangePasswordForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

import { PersonalData } from './personal-data';

import './styles.scss';

const options = [
    {
        title: i18n.t('Способ получения уведомлений'),
        checkboxes: [
            {
                label: i18n.t('Email-оповещения')
            },
            {
                label: i18n.t('SMS-оповещения'),
                defaultIsChecked: true
            },
            {
                label: i18n.t('Push-оповещения')
            }
        ]
    },
    {
        title: i18n.t('Категория уведомлений'),
        checkboxes: [
            {
                label: i18n.t(
                    'Денежные операции (отправить/оплатить/получить)'
                ),
                defaultIsChecked: true
            },
            {
                label: i18n.t('Важные обновления')
            },
            {
                label: i18n.t('Новости/акции')
            }
        ]
    }
];

export const PersonalPage = () => {
    const { signedOut } = useAuth();
    const { t } = useTranslation();
    const { data: personalInfo, isLoading, error } = useGetInfoQuery();

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

    return isLoading ? (
        <Preloader />
    ) : (
        <Container>
            {personalInfo && (
                <Menu
                    href={RouteName.PERSONAL_PAGE}
                    routes={PersonalRouteName}
                    elements={[
                        {
                            id: 1,
                            name: t('Личные данные'),
                            component: <PersonalData info={personalInfo} />
                        },
                        {
                            id: 2,
                            name: t('Безопасность'),
                            component: (
                                <MultiStepForm
                                    variant='change-password'
                                    forms={[
                                        {
                                            id: 1,
                                            title: t('Изменить пароль'),
                                            component: <ChangePasswordForm />
                                        }
                                    ]}
                                />
                            )
                        },
                        {
                            id: 3,
                            name: t('Уведомления'),
                            component: (
                                <div className='notifications'>
                                    <CheckboxGroup options={options} />
                                    <Link variant='underline' to='/'>
                                        {t('История уведомлений')}
                                    </Link>
                                </div>
                            )
                        }
                    ]}
                />
            )}
        </Container>
    );
};
