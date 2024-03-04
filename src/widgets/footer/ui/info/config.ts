import { SvgIconNames } from 'src/shared/ui';

interface Social {
    icon: SvgIconNames;
    href: string;
}

export const socialLinks: Social[] = [
    { icon: 'vkontakte', href: '/' },
    { icon: 'odnoklassniki', href: '/' },
    { icon: 'twitter', href: '/' },
    { icon: 'youtube', href: '/' },
    { icon: 'telegram', href: '/' }
];
