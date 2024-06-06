import { memo } from 'react';
import { SVG } from 'src/shared/ui/icon/model/types';

import type { SvgIconName } from 'src/shared/ui/icon/model/types';
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
    ({ icon, widthAndHeight, className, shouldExistTestId }: Props) => (
        <img
            src={SVG[icon]}
            width={widthAndHeight || 24}
            height={widthAndHeight || 24}
            alt=''
            data-testid={shouldExistTestId ? icon : undefined}
            className={className}
        />
    )
);
