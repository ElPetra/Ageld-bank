import { Icon, Link, Text } from 'src/shared/ui';

import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Greeting = () => {
    return (
        <div className='greeting'>
            <div className='greeting__logo'>
                <Icon icon='logo-title' width={129} height={108} />
                <Text tag='h1' size='xl' weight='bold' align='center'>
                    Приветствуем <br /> в интернет-банкинге!
                </Text>
            </div>
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
    );
};
