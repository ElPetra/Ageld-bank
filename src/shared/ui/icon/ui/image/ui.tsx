import { memo } from 'react';

import type { ImgHTMLAttributes } from 'react';

import type { PngImageNames } from '../../model/types';
import classNames from 'classnames';

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
            width={widthAndHeight || width || 500}
            height={widthAndHeight || height || 500}
            alt=''
            className={className}
        />
    )
);
