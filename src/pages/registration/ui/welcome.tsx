import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Button, Image, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';
interface WelcomeProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Welcome({ setShowForm }: WelcomeProps) {
    const { t } = useTranslation();
    return (
        <div className='welcome__wrapper'>
            <div className='welcome__left-side'>
                <Text weight='bold' size='l' align='center'>
                    {t('Добро пожаловать в интернет-банкинг A-Geld')}
                </Text>
                <Text
                    align='center'
                    size='m'
                    weight='medium'
                    lineHeight='unset'
                >
                    {t(
                        'Доступ в личный кабинет возможен с телефонного номера, указанного при открытии счета в нашем банке'
                    )}
                </Text>
                <Text align='center' size='s'>
                    {t(
                        'Для создания кабинета пользователя нажмите кнопку  Регистрация'
                    )}
                    ;
                </Text>
                <Button
                    width='max'
                    variant='secondary'
                    onClick={() => {
                        setShowForm(true);
                    }}
                >
                    {t('Регистрация')}
                </Button>
                <div className='welcome__auth-redirect'>
                    <Text>{t('У вас уже есть аккаунт?')} </Text>
                    <Link to={RouteName.LOGIN_PAGE} variant='action'>
                        {t('Авторизуйтесь')}
                    </Link>
                </div>
            </div>
            <Image image='welcome'></Image>
        </div>
    );
}
