import { memo } from 'react';

import { PNG } from '../../model';

import type { ImgHTMLAttributes } from 'react';
import type { PngImageNames } from '../../model';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image: PngImageNames;
    widthAndHeight?: number;
    className?: string;
}

export const Image = memo(
    ({ image, width, height, widthAndHeight, className }: Props) => (
        <img
            src={PNG[image]}
            {...(widthAndHeight || width
                ? { width: widthAndHeight || width }
                : {})}
            {...(widthAndHeight || height
                ? { height: widthAndHeight || height }
                : {})}
            alt=''
            className={className}
        />
    )
);
