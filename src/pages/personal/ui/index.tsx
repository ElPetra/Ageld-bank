import { Contacts, UserCard } from 'src/entities/user';
import { Address } from 'src/entities/user';
import { Menu } from 'src/features/menu';
import { ChangePasswordForm, EmailForm, SmsCodeForm } from 'src/features/forms';
import { MultiStepForm } from 'src/features/multi-step-form';

export const PersonalPage = () => {
    return (
        <Menu
            elements={[
                {
                    id: 1,
                    name: 'Личные данные',
                    component: (
                        <UserCard
                            fullName={'Константинов Константин Константинович'}
                        >
                            <Contacts phone={'+7 (953) 627-05-08'}>
                                <EmailForm email={'juliadeiker@yandex.ru'} />
                            </Contacts>
                            <Address
                                street='Б-р Энтузиастов'
                                house='2'
                                apartment='24'
                                city='Москва'
                                index='134567'
                            />
                        </UserCard>
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
                    component: <div>Уведомления</div>
                }
            ]}
        />
    );
};
