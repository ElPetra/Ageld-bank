import { ImgHTMLAttributes, memo } from 'react';

import { PngImageNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image: PngImageNames;
    widthAndHeight?: string;
}

export const Image = memo(({ image, width, height, widthAndHeight }: Props) => (
    <img
        src={image + '.png'}
        width={widthAndHeight || width}
        height={widthAndHeight || height}
        alt=''
    />
));
