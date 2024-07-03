import { useRef } from 'react';
import { useCarousel, useCarouselControls } from 'src/shared/lib/carousel';

import { CarouselInner } from './ui/inner';
import { CarouselIndicators } from './ui/indicators';
import { CarouselControls } from './ui/controls';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    cards: ReactNode[];
}

export const Carousel = ({ cards }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { angle, distance } = useCarousel(cards.length);
    const { changeRotateByIndicator, changeRotateByControl, active } =
        useCarouselControls(cards.length, containerRef, angle);
    return (
        <div className='carousel'>
            <div>
                <CarouselInner
                    distance={distance}
                    angle={angle}
                    active={active}
                    containerRef={containerRef}
                    cards={cards}
                />
                <CarouselIndicators
                    cards={cards}
                    changeRotateByIndicator={changeRotateByIndicator}
                    active={active}
                />
            </div>
            <CarouselControls changeRotateByControl={changeRotateByControl} />
        </div>
    );
};
