import { useLocation } from 'react-router-dom';

import { Button, Icon, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const SuccessPage = () => {
    const location = useLocation();
    const { button } = location.state;
    const { message } = location.state || { message: 'Добро пожаловать!' };
    return (
        <div className='success'>
            <Icon icon='logo-title' width={129} height={108} />
            <div className='success__text'>
                <Text size='l' weight='regular' align='center'>
                    Поздравляем!
                    <br />
                    {message}
                </Text>
            </div>

            {button && (
                <Button type='button' variant='secondary'>
                    <Link to={RouteName.MAIN_PAGE}>Войти в кабинет</Link>
                </Button>
            )}
        </div>
    );
};
