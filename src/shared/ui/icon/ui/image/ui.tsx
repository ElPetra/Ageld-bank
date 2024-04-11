import { memo } from 'react';

import type { ImgHTMLAttributes } from 'react';

import type { PngImageNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image: PngImageNames;
    widthAndHeight?: number;
}

export const Image = memo(({ image, width, height, widthAndHeight }: Props) => (
    <img
        src={'/src/shared/ui/icon/assets/images/' + image + '.png'}
        width={widthAndHeight || width || 500}
        height={widthAndHeight || height || 500}
        alt=''
    />
));
