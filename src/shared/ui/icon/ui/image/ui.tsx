import { memo } from 'react';

import type { ImgHTMLAttributes } from 'react';

import type { PngImageNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image?: PngImageNames;
    widthAndHeight?: number;
    src?: string;
    className?: string;
}

export const Image = memo(
    ({ image, width, height, src, widthAndHeight, className }: Props) => (
        <img
            src={
                image
                    ? '/src/shared/ui/icon/assets/images/' + image + '.png'
                    : src
            }
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
