import { useRef } from 'react';
import { useCarousel } from 'src/shared/lib/carousel';

import { Gallery } from './ui/carousel-galery';
import { Controlls } from './ui/carousel-controlls';

import './styles.scss';

export const Carousel = ({ cards }: { cards: Array<JSX.Element> }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { angle, distance } = useCarousel(cards.length);
    return (
        <div className='carousel_outer_container'>
            <Gallery
                distance={distance}
                angle={angle}
                containerRef={containerRef}
                cards={cards}
            />
            <Controlls containerRef={containerRef} angle={angle} />
        </div>
    );
};
