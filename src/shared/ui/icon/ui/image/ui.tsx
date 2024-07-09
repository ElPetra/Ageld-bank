import { memo } from 'react';

import { PNG } from '../../model';

import type { ImgHTMLAttributes } from 'react';
import type { PngImageNames } from '../../model';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    image?: PngImageNames;
    widthAndHeight?: number;
    className?: string;
    shouldExistTestId?: boolean;
}

export const Image = memo(
    ({
        image,
        width,
        height,
        src,
        widthAndHeight,
        className,
        shouldExistTestId
    }: Props) => (
        <img
            src={src || (image && PNG[image])}
            {...(widthAndHeight || width
                ? { width: widthAndHeight || width }
                : {})}
            {...(widthAndHeight || height
                ? { height: widthAndHeight || height }
                : {})}
            alt=''
            className={className}
            data-testid={shouldExistTestId ? image : undefined}
        />
    )
);
