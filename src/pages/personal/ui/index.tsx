import { Link, Container } from 'src/shared/ui';
import { PersonalRouteName, RouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { ChangePasswordForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';
import { CheckboxGroup } from 'src/widgets/notifications';

import { PersonalData } from './personal-data';

import { options } from '../model';

export const PersonalPage = () => {
    return (
        <Container>
            <Menu
                href={RouteName.PERSONAL_PAGE}
                routes={PersonalRouteName}
                elements={[
                    {
                        id: 1,
                        name: 'Личные данные',
                        component: <PersonalData />
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
        </Container>
    );
};
