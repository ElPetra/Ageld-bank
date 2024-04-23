import { type SvgIconNames } from 'src/shared/ui';

export type Social =
    | 'Telegram'
    | 'Вконтакте'
    | 'WhatsApp'
    | 'Viber'
    | 'Чат с банком';

export interface Socials {
    text: Social;
    icon: SvgIconNames;
    href: string;
}
export interface ContactBlock {
    forRus: string;
    forMsk: string;
    email: string;
    forNotRus?: string;
}

export type ContactsBlockKeys = keyof ContactBlock;
