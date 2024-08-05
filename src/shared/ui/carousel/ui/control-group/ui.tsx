import { useCarouselControls } from 'src/shared/lib';

import { CarouselIndicators } from './indicators';
import { CarouselControls } from './controls';

import type { ReactNode, RefObject } from 'react';

interface Props {
    cards: ReactNode[];
    angle: number;
    containerRef: RefObject<HTMLDivElement>;
}

export const CarouselControlGroup = ({ cards, containerRef, angle }: Props) => {
    const { changeRotateByIndicator, changeRotateByControl, active } =
        useCarouselControls(cards.length, containerRef, angle);
    return (
        <>
            <CarouselIndicators
                cards={cards}
                changeRotateByIndicator={changeRotateByIndicator}
                active={active}
            />
            <CarouselControls changeRotateByControl={changeRotateByControl} />
        </>
    );
};
