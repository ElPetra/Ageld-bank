import { memo } from 'react';

import eyeOpenSVG from '../../assets/icons/eye-open.svg';
import eyeCloseSVG from '../../assets/icons/eye-close.svg';
import logoSVG from '../../assets/icons/logo-icon.svg';
import logoDarkSVG from '../../assets/icons/logo-dark.svg';
import appStoreSVG from '../../assets/icons/app-store.svg';
import googlePlaySVG from '../../assets/icons/google-play.svg';
import searchSVG from '../../assets/icons/search-icon.svg';
import clearSVG from '../../assets/icons/clear-icon.svg';
import telegramSVG from '../../assets/icons/telegram-icon.svg';
import copySVG from '../../assets/icons/copy-icon.svg';
import copyGreySVG from '../../assets/icons/copy-grey.svg';
import closeSVG from '../../assets/icons/close-icon.svg';
import odnoklassnikiSVG from '../../assets/icons/odnoklassniki-icon.svg';

import type { ImgHTMLAttributes } from 'react';
type SvgIconNames = keyof typeof SVG;
export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconNames;
    width?: number;
    height?: number;
    widthAndHeight?: number;
    className?: string;
}
const SVG = {
    'eye-open': eyeOpenSVG,
    'eye-close': eyeCloseSVG,
    'logo-icon': logoSVG,
    'logo-dark': logoDarkSVG,
    'app-store': appStoreSVG,
    'google-play': googlePlaySVG,
    'search-icon': searchSVG,
    'clear-icon': clearSVG,
    'telegram-icon': telegramSVG,
    'copy-icon': copySVG,
    'copy-grey': copyGreySVG,
    'close-icon': closeSVG,
    'odnoklassniki-icon': odnoklassnikiSVG
};

export const Icon = memo(
    ({ icon, width, height, widthAndHeight, className }: Props) => (
        <img
            src={'/src/shared/ui/icon/assets/icons/' + icon + '.svg'}
            width={widthAndHeight || width || 24}
            height={widthAndHeight || height || 24}
            alt=''
            className={className}
        />
    )
);
