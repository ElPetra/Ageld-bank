import { Link } from 'src/shared/ui';
import { PersonalRouteName, RouteName } from 'src/shared/model';
import { Address, Contacts, UserCard } from 'src/entities/user';
import { Menu } from 'src/features/menu';
import { ChangePasswordForm, EmailForm, SmsCodeForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';
import { CheckboxGroup } from 'src/widgets/notifications';

import { useGetInfoQuery } from 'src/shared/api/index.js';

import { options } from '../model';

export const PersonalPage = () => {
    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const { data, isLoading } = useGetInfoQuery({
        Authorization: token ? token : refreshToken
    });
    const infoData = data && JSON.parse(data);

    return (
        <Menu
            href={RouteName.PERSONAL_PAGE}
            routes={PersonalRouteName}
            elements={[
                {
                    id: 1,
                    name: 'Личные данные',
                    component: (
                        <>
                            {isLoading && <p>Loading...</p>}
                            {data && (
                                <UserCard
                                    fullName={`${infoData.lastName} ${infoData.firstName} ${infoData.middleName}`}
                                >
                                    <Contacts phone={infoData.phoneNumber}>
                                        <EmailForm email={infoData.email} />
                                    </Contacts>
                                    <Address
                                        street='Б-р Энтузиастов'
                                        house='2'
                                        apartment='24'
                                        city='Москва'
                                        index='134567'
                                    />
                                </UserCard>
                            )}
                        </>
                    )
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
                                },
                                {
                                    id: 2,
                                    title: 'Введите код из смс',
                                    component: (
                                        <SmsCodeForm variant='password-create' />
                                    )
                                }
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
    );
};
