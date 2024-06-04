import type { SvgIconName } from 'src/shared/ui';

interface Social {
    icon: SvgIconName;
    href: string;
}

export const socialLinks: Social[] = [
    { icon: 'vk', href: '/' },
    { icon: 'ok', href: '/' },
    { icon: 'twitter', href: '/' },
    { icon: 'youtube', href: '/' },
    { icon: 'telegram', href: '/' }
];
