import { useRef } from 'react';
import { useCarousel } from 'src/shared/lib/carousel';

import { CarouselControlGroup } from './ui/control-group';
import { CarouselInner } from './ui/inner';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    cards: ReactNode[];
}

export const Carousel = ({ cards }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { angle, distance } = useCarousel(cards.length);
    return (
        <div className='carousel' data-testid='carousel'>
            <div>
                <CarouselInner
                    distance={distance}
                    angle={angle}
                    containerRef={containerRef}
                    cards={cards}
                />
            </div>
            <CarouselControlGroup
                cards={cards}
                angle={angle}
                containerRef={containerRef}
            />
        </div>
    );
};
