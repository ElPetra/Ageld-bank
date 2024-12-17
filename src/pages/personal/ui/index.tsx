import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import i18n from 'src/shared/model/i18n';

import { Link, Container, Preloader, Form } from 'src/shared/ui';
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
            i18n.t('Email-оповещения'),
            i18n.t('SMS-оповещения'),
            i18n.t('Push-оповещения')
        ]
    },
    {
        title: i18n.t('Категория уведомлений'),
        checkboxes: [
            i18n.t('Денежные операции (отправить/оплатить/получить)'),
            i18n.t('Важные обновления'),
            i18n.t('Новости/акции')
        ]
    }
];

export const PersonalPage = () => {
    const { signedOut } = useAuth();
    const { t } = useTranslation();
    const { data: personalInfo, isLoading, error } = useGetInfoQuery();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { register, handleSubmit } = useForm<any>({
        defaultValues: {
            notifications: [
                'SMS-оповещения',
                'Денежные операции (отправить/оплатить/получить)'
            ]
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

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
                                <Form onSubmit={handleSubmit(() => {})}>
                                    <div className='notifications'>
                                        <CheckboxGroup
                                            options={options}
                                            register={register}
                                            field='notifications'
                                        />
                                        <Link variant='underline' to='/'>
                                            {t('История уведомлений')}
                                        </Link>
                                    </div>
                                </Form>
                            )
                        }
                    ]}
                />
            )}
        </Container>
    );
};
