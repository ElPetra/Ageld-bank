import { Link, Text } from 'src/shared/ui';

export const AuthPage = () => {
    return (
        <div>
            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с и Политикой
                конфиденциальности &nbsp;
                <Link to='/'>Правилами пользования СДБО</Link> &nbsp; и даёте
                согласие на сбор, обработку и &nbsp;
                <Link to='/'>Хранение ваших персональных данных</Link>
            </Text>
            <br />
            Регистрация
        </div>
    );
};
