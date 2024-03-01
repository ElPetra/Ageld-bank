import { ImgHTMLAttributes, memo } from 'react';

import { PngImageNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image: PngImageNames;
    widthAndHeight?: number;
}

<<<<<<< HEAD
export const Image = memo(({ image, width, height, widthAndHeight }: Props) => (
    <img
        src={image + '.png'}
        width={widthAndHeight || width}
        height={widthAndHeight || height}
        alt=''
    />
));
=======
export const Image = memo(({ image, width, height, widthAndHeight }: Props) =>
    <img src={image + '.png'} width={widthAndHeight || width || 500} height={widthAndHeight || height || 500} alt='' />
);
>>>>>>> 0d72c9fd3ea571c697e84973738ca8ab1422040f
