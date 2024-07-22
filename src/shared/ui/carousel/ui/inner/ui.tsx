import cn from 'classnames';

import type { RefObject, ReactNode } from 'react';

import './styles.scss';

interface Props {
    containerRef: RefObject<HTMLDivElement>;
    distance: number;
    angle: number;
    cards: ReactNode[];
}

export const CarouselInner = ({
    containerRef,
    distance,
    angle,
    cards
}: Props) => {
    const carouselInnerClasses = cn('carousel-inner', {
        overflowHidden: cards.length > 3
    });
    return (
        <div className={carouselInnerClasses}>
            <div className='carousel-inner__container' ref={containerRef}>
                {cards.map((el, index) => (
                    <div
                        key={index}
                        className='carousel-inner__element'
                        style={{
                            transform: `rotateY(${index * angle}deg) translateZ(${distance}px)`
                        }}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </div>
    );
};
