import { memo } from 'react';

import type { ImgHTMLAttributes } from 'react';

import type { SvgIconNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconNames;
    width?: number;
    height?: number;
    widthAndHeight?: number;
}

export const Icon = memo(({ icon, width, height, widthAndHeight }: Props) => (
    <img
        src={'src/shared/ui/icon/assets/icons/' + icon + '.svg'}
        width={widthAndHeight || width || 24}
        height={widthAndHeight || height || 24}
        alt=''
    />
));
