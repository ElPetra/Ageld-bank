import { ImgHTMLAttributes, memo } from 'react';

import { PngImageNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image: PngImageNames;
    widthAndHeight?: number;
}

export const Image = memo(({ image, width, height, widthAndHeight }: Props) => (
    <img
        src={image + '.png'}
        width={widthAndHeight || width || 500}
        height={widthAndHeight || height || 500}
        alt=''
    />
));
