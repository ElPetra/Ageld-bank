import cn from 'classnames';

import type { RefObject, ReactNode } from 'react';

import './styles.scss';

interface Props {
    containerRef: RefObject<HTMLDivElement>;
    distance: number;
    angle: number;
    active: number;
    cards: ReactNode[];
}

export const CarouselInner = ({
    containerRef,
    distance,
    angle,
    active,
    cards
}: Props) => {
    const elementClassName = (index: number) =>
        cn('carousel-inner__element', {
            hidden: active !== index
        });
    return (
        <div className='carousel-inner'>
            <div className='carousel-inner__container' ref={containerRef}>
                {cards.map((el, index) => (
                    <div
                        key={index}
                        className={elementClassName(index)}
                        style={{
                            transform: `rotateY(${index * angle}deg) translateZ(${distance + 25}px)`
                        }}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </div>
    );
};
