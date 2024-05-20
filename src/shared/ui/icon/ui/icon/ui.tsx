import { memo } from 'react';
import { SVG } from 'src/shared/ui/icon/model/types.js';

import type { SvgIconName } from 'src/shared/ui/icon/model/types.js';
import type { ImgHTMLAttributes } from 'react';

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
