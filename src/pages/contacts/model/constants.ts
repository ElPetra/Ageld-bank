import { type Socials } from './types';

export const SOCIALS_BOTS = 'Чат-боты в социальных сетях';
export const CONTACTS = 'Контакты';
export const WORKING_HOURS = 'Режим работы';
//Направление связи
export const INDIVIDUAL_PHONES = 'Горячая линия для частных лиц';
export const CORPORATE_PHONES = 'Горячая линия корпоративным клиентам';
export const SUPPORT = 'Техническая поддержка';
//отделы
export const CONSULT_INDIVID = 'Консультация физических лиц';
export const CONSULT_JURIDIC = 'Консультация юридических лиц';
export const CARD_BLOCKING = 'Блокировка карты';
// будни, суббота, воскресенье
export const WEEKDAYS = 'Будние дни: ';
export const SATURDAY = 'Суббота: ';
export const SUNDAY = 'Воскресенье: ';
//Часы работы
export const CONSULT_INDIVID_HOURS = ['с 8 до 20ч', 'с 9 до 13ч', 'выходной'];
export const CONSULT_JURIDIC_HOURS = ['с 8 до 20ч', 'с 9 до 13ч', 'выходной'];
export const ALL_DAY = 'круглосуточно';
//Контакты
export const FREE_CALL_RUS = 'Бесплатный звонок по России';
export const FOR_MSK = 'Для жителей Москвы и Московской области';
export const EMAIL = 'Email';
export const FOR_NOT_RUS = 'Для звонков за пределами России';

export const constactsMatcher = [FREE_CALL_RUS, FOR_MSK, EMAIL, FOR_NOT_RUS];

export const socials: Array<Socials> = [
    { text: 'Telegram', icon: 'social-network-telegram', href: '/' },
    { text: 'Вконтакте', icon: 'social-network-vk', href: '/' },
    { text: 'WhatsApp', icon: 'social-network-whats-app', href: '/' },
    { text: 'Viber', icon: 'social-network-viber', href: '/' },
    { text: 'Чат с банком', icon: 'social-network-email', href: '/' }
];
export const workingHoursLabels = [WEEKDAYS, SATURDAY, SUNDAY];

export const individuals = {
    forRus: 'x-xxx-xxx-xx-xx',
    forMsk: 'x-xxx-xxx-xx-xx',
    email: 'xxxxxxx@xxxxxxx',
    forNotRus: 'x-xxx-xxx-xx-xx'
};

export const corporate = {
    forRus: 'x-xxx-xxx-xx-xx',
    forMsk: 'x-xxx-xxx-xx-xx',
    email: 'xxxxxxx@xxxxxxx'
};

export const support = {
    forRus: 'x-xxx-xxx-xx-xx',
    forMsk: 'x-xxx-xxx-xx-xx',
    email: 'xxxxxxx@xxxxxxx'
};
