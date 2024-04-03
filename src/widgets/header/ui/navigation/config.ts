import { RouteName } from 'src/shared/model';

export const links = [
    { text: 'Банкоматы и отеделения', href: RouteName.MAIN_PAGE },
    { text: 'Курсы валют', href: RouteName.MAIN_PAGE },
    { text: 'Контакты', href: RouteName.MAIN_PAGE },
    { text: 'Список услуг', href: RouteName.MAIN_PAGE },
    { text: 'Документы', href: RouteName.MAIN_PAGE },
    { text: 'Вопросы и ответы', href: RouteName.MAIN_PAGE }
];

export const privateLinks = [
    { text: 'Личные данные', href: RouteName.PERSONAL_PAGE }
];

export const publicLinks = [
    { text: 'Войти', href: RouteName.LOGIN_PAGE },
    { text: 'Регистрация', href: RouteName.REGISTRATION_PAGE }
];
