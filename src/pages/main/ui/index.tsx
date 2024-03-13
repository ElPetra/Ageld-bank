import { RouteName } from 'src/shared/model';
import { Link, Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';

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
                        <Link variant='action' to={RouteName.LOGIN_PAGE}>
                            Зарегистрироваться
                        </Link>
                        .
                    </Text>
                </div>
            </div>
        </div>
    );
};
