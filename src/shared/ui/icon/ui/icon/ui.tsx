import { memo } from 'react';

import { SVG } from '../../model';

import type { ImgHTMLAttributes } from 'react';
import type { SvgIconName } from '../../model';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconName;
    width?: number;
    height?: number;
    widthAndHeight?: number;
    className?: string;
    shouldExistTestId?: boolean;
}

export const Icon = memo(
    ({
        icon,
        width,
        height,
        widthAndHeight,
        className,
        shouldExistTestId
    }: Props) => (
        <img
            src={SVG[icon]}
            width={widthAndHeight || width || 24}
            height={widthAndHeight || height || 24}
            alt=''
            data-testid={shouldExistTestId ? icon : undefined}
            className={className}
        />
    )
);
