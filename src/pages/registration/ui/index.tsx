import { Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';

import './styles.scss';

export const RegistrationPage = () => {
    return (
        <div className='register'>
            <div className='greeting'>
                <Greeting />
                <div className='greeting__warning-text'>
                    <Text size='l' weight='regular'>
                        Доступ в личный кабинет возможен с телефонного номера,
                        указанного при открытии счёта в нашем банке.
                        <br />
                        <br />
                        Для создания кабинета пользователя нажмите кнопку
                        РЕГИСТРАЦИЯ.
                    </Text>
                </div>
            </div>
            <div className='action-box'>компонент для взаимодействия</div>
        </div>
    );
};
