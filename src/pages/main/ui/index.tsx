import { RouteName } from 'src/shared/model';
import { Link, Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';
//import { useGetInfoQuery } from 'src/shared/api';

export const MainPage = () => {
    //useGetInfoQuery({ customerPhone: '79234251422' });

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
        </div>
    );
};
