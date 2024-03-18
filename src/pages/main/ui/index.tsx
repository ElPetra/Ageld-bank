import { RouteName } from 'src/shared/model';
import { Link, Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';
import { UserCard } from 'src/entities/user';

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
                <Text>
                    Text в Text Text возможен с Text номера, указанного Text
                    открытии счёта в нашем Text Text TextTextTextTextText
                    TextTextText Text
                </Text>
                <Text>
                    Text в Text Text возможен с Text номера, указанного Text
                    открытии счёта в нашем Text Text TextTextTextTextText
                    TextTextText Text
                </Text>
            </UserCard>
        </div>
    );
};
