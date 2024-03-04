import { Link, Text, Container } from 'src/shared/ui';
import { Header } from 'src/widgets/header';

export const AuthPage = () => {
    return (
        <div>
            <Header />
            <br />
            <Container variant='tertiary'>
                Пример
                <br />
                <Text size='xs'>
                    Нажав кнопку «Далее», вы соглашаетесь с и Политикой
                    конфиденциальности &nbsp;
                    <Link to='/'>Правилами пользования СДБО</Link> &nbsp; и
                    даёте согласие на сбор, обработку и &nbsp;
                    <Link to='/'>Хранение ваших персональных данных</Link>
                </Text>
            </Container>
            <br />
            Регистрация
        </div>
    );
};
