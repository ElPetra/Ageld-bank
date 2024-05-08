import type { SvgIconName } from 'src/shared/ui';

interface Social {
    icon: SvgIconName;
    href: string;
}

export const socialLinks: Social[] = [
    { icon: 'vkontakte-icon', href: '/' },
    { icon: 'odnoklassniki-icon', href: '/' },
    { icon: 'twitter-icon', href: '/' },
    { icon: 'youtube-icon', href: '/' },
    { icon: 'telegram-icon', href: '/' }
];
