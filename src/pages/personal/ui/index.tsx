import { useEffect } from 'react';

import { Link, Container, Preloader } from 'src/shared/ui';
import { useGetInfoQuery } from 'src/shared/api';
import { PersonalRouteName, RouteName } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { CheckboxGroup } from 'src/entities/filter';
import { Menu } from 'src/features/menu';
import { ChangePasswordForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

import { options } from '../model';
import { PersonalData } from './personal-data';

export const PersonalPage = () => {
    const { signedOut } = useAuth();
    const { data: personalInfo, isLoading, error } = useGetInfoQuery();

    useEffect(() => {
        if (error) {
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
                            name: 'Личные данные',
                            component: <PersonalData info={personalInfo} />
                        },
                        {
                            id: 2,
                            name: 'Безопасность',
                            component: (
                                <MultiStepForm
                                    variant='change-password'
                                    forms={[
                                        {
                                            id: 1,
                                            title: 'Изменить пароль',
                                            component: <ChangePasswordForm />
                                        }
                                        // {
                                        //     id: 2,
                                        //     title: 'Введите код из смс',
                                        //     component: (
                                        //         <SmsCodeForm
                                        //             variant='password-create'
                                        //             passwords={passwords}
                                        //         />
                                        //     )
                                        // }
                                    ]}
                                />
                            )
                        },
                        {
                            id: 3,
                            name: 'Уведомления',
                            component: (
                                <>
                                    <CheckboxGroup options={options} />
                                    <Link variant='underline' to='/'>
                                        История уведомлений
                                    </Link>
                                </>
                            )
                        }
                    ]}
                />
            )}
        </Container>
    );
};
