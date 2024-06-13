import React from 'react';
import { Text, Button, Image, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import './styles.scss';

export default function Welcome() {
    return (
        <div className='welcome__wrapper'>
            <div className='welcome__left-side'>
                <Text>Добро пожаловать в интернет-банкинг A-Geld</Text>
                <Text>
                    Доступ в личный кабинет возможен с телефонного номера,
                    указанного при открытии счета в нашем банке
                </Text>
                <Text>
                    Для создания кабинета пользователя нажмите кнопку
                    &quot;Регистрация&quot;
                </Text>
                <Button width='max' variant='secondary'>
                    Регистрация
                </Button>
                <Text>У вас уже есть аккаунт?</Text>
                <Link to={RouteName.LOGIN_PAGE} variant='action'>
                    Авторизуйтесь
                </Link>
            </div>
            <Image image='welcome'></Image>
        </div>
    );
}
