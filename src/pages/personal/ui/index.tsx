import { Contacts, UserCard } from 'src/entities/user';
import { Address } from 'src/entities/user';
import { Menu } from 'src/features/menu';
import { EmailForm } from 'src/features/forms';

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
                    component: <div>Безопасность</div>
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
