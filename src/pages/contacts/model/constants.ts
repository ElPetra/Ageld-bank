import { type Socials } from './types';
//Часы работы
export const CONSULT_INDIVID_HOURS = ['8:00-20:00', '9:00-13:00', 'выходной'];
export const CONSULT_JURIDIC_HOURS = ['8:00-20:00', '9:00-13:00', 'выходной'];

export const contactsMatcher = {
    forRus: 'Бесплатный звонок по России',
    forMsk: 'Для жителей Москвы и Московской области',
    email: 'Email',
    forNotRus: 'Для звонков за пределами России'
};

export const individuals = {
    forRus: '+7 (800) 200 06 60',
    forMsk: '+7 (800) 200 06 70',
    email: 'info.msk@a-geld.ru',
    forNotRus: '+7 (800) 200 06 80'
};

export const corporate = {
    forRus: '+7 (800) 200 06 40',
    forMsk: '+7 (800) 200 06 50',
    email: 'info.msk@a-geld.ru'
};

export const support = {
    forRus: '+7 (800) 200 06 10',
    forMsk: '+7 (800) 200 06 20',
    email: 'info.msk@a-geld.ru'
};

export const socials: Array<Socials> = [
    { text: 'Telegram', icon: 'social-network-telegram', href: '/' },
    { text: 'Вконтакте', icon: 'social-network-vk', href: '/' },
    { text: 'WhatsApp', icon: 'social-network-whats-app', href: '/' },
    { text: 'Viber', icon: 'social-network-viber', href: '/' },
    { text: 'Чат с банком', icon: 'social-network-email', href: '/' }
];
export const workingHoursLabels = [
    'Понедельник - Пятница: ',
    'Суббота: ',
    'Воскресенье - '
];
