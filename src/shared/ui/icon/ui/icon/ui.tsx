import { ImgHTMLAttributes, memo } from 'react';

import { SvgIconNames } from '../../model/types';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    icon: SvgIconNames;
    width?: number;
    height?: number;
    widthAndHeight?: number;
}

export const Icon = memo(({ icon, width = 24, height = 24, widthAndHeight }: Props) =>
    <img src={'src/shared/ui/icon/assets/icons/' + icon + '.svg'} width={widthAndHeight | width}
         height={widthAndHeight | height} alt='' />
);