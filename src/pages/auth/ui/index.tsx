import { Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

export const AuthPage = () => {
    return (
        <div>
            <br />
            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с и Политикой
                конфиденциальности &nbsp;
                <Link to={RouteName.PUBLIC_CONTRACT_PAGE} variant='action'>
                    Правилами пользования СДБО
                </Link>
                &nbsp; и даёте согласие на сбор, обработку и &nbsp;
                <Link to={RouteName.PUBLIC_CONTRACT_PAGE} variant='action'>
                    Хранение ваших персональных данных
                </Link>
            </Text>
            <br />
            Регистрация
        </div>
    );
};
