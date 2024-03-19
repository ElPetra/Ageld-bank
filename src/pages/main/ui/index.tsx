import { RouteName } from 'src/shared/model';
import { Link, Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';
import { Contacts, UserCard } from 'src/entities/user';
import { Address } from 'src/entities/user';
import { EmailForm } from 'src/features/forms';

export const MainPage = () => {
    return (
        <div>
            <div className='greeting'>
                <Greeting />
                <div className='greeting__warning-text'>
                    <Text size='l' weight='regular'>
                        Доступ в личный кабинет возможен с телефонного номера,
                        указанного при открытии счёта в нашем банке.
                        <br />
                        <br />
                        Для входа в личный кабинет &nbsp;
                        <Link variant='action' to={RouteName.LOGIN_PAGE}>
                            Войти
                        </Link>
                        &nbsp;/&nbsp;
                        <Link variant='action' to={RouteName.REGISTRATION_PAGE}>
                            Зарегистрироваться
                        </Link>
                        .
                    </Text>
                </div>
            </div>

            <UserCard fullName={'Константинов Константин Константинович'}>
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
        </div>
    );
};
