<<<<<<< HEAD
=======
import React, { ImgHTMLAttributes, memo } from 'react';

>>>>>>> 0d72c9fd3ea571c697e84973738ca8ab1422040f
import { SvgIconNames } from '../../model/types';

import { ImgHTMLAttributes, memo } from 'react';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconNames;
    width?: number;
    height?: number;
    widthAndHeight?: number;
}

<<<<<<< HEAD
export const Icon = memo(
    ({ icon, width = 24, height = 24, widthAndHeight }: Props) => (
        <img
            src={'src/shared/ui/icon/assets/icons/' + icon + '.svg'}
            width={widthAndHeight || width}
            height={widthAndHeight || height}
            alt=''
        />
    )
);
=======
export const Icon = memo(({ icon, width, height, widthAndHeight }: Props) =>
    <img src={'src/shared/ui/icon/assets/icons/' + icon + '.svg'} width={widthAndHeight || width || 24}
         height={widthAndHeight || height || 24} alt='' />
);
>>>>>>> 0d72c9fd3ea571c697e84973738ca8ab1422040f
