import React from 'react';

import { Text, Button, Image, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';
interface WelcomeProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Welcome({ setShowForm }: WelcomeProps) {
    return (
        <div className='welcome__wrapper'>
            <div className='welcome__left-side'>
                <Text weight='bold' size='l' align='center'>
                    Добро пожаловать в интернет-банкинг A-Geld
                </Text>
                <Text
                    align='center'
                    size='m'
                    weight='medium'
                    lineHeight='unset'
                >
                    Доступ в личный кабинет возможен с телефонного номера,
                    указанного при открытии счета в нашем банке
                </Text>
                <Text align='center' size='s'>
                    Для создания кабинета пользователя нажмите кнопку
                    &quot;Регистрация&quot;
                </Text>
                <Button
                    width='max'
                    variant='secondary'
                    onClick={() => {
                        setShowForm(true);
                    }}
                >
                    Регистрация
                </Button>
                <div className='welcome__auth-redirect'>
                    <Text>У вас уже есть аккаунт?</Text>
                    <Link to={RouteName.LOGIN_PAGE} variant='action'>
                        Авторизуйтесь
                    </Link>
                </div>
            </div>
            <Image image='welcome'></Image>
        </div>
    );
}
