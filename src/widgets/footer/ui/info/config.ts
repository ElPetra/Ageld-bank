import type { SvgIconNames } from 'src/shared/ui';

interface Social {
    icon: SvgIconNames;
    href: string;
}

export const socialLinks: Social[] = [
    { icon: 'vkontakte', href: '/' },
    { icon: 'odnoklassniki-icon', href: '/' },
    { icon: 'twitter', href: '/' },
    { icon: 'youtube', href: '/' },
    { icon: 'telegram-icon', href: '/' }
];
