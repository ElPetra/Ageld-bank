import { type Socials } from './types';
//Часы работы
export const CONSULT_INDIVID_HOURS = ['с 8 до 20ч', 'с 9 до 13ч', 'выходной'];
export const CONSULT_JURIDIC_HOURS = ['с 8 до 20ч', 'с 9 до 13ч', 'выходной'];

export const contactsMatcher = {
    forRus: 'Бесплатный звонок по России',
    forMsk: 'Для жителей Москвы и Московской области',
    email: 'Email',
    forNotRus: 'Для звонков за пределами России'
};

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

export const socials: Array<Socials> = [
    { text: 'Telegram', icon: 'social-network-telegram', href: '/' },
    { text: 'Вконтакте', icon: 'social-network-vk', href: '/' },
    { text: 'WhatsApp', icon: 'social-network-whats-app', href: '/' },
    { text: 'Viber', icon: 'social-network-viber', href: '/' },
    { text: 'Чат с банком', icon: 'social-network-email', href: '/' }
];
export const workingHoursLabels = [
    'Будние дни: ',
    'Суббота: ',
    'Воскресенье: '
];
