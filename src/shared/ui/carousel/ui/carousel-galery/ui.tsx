import cn from 'classnames';

import type { RefObject } from 'react';
import './styles.scss';

interface Props {
    containerRef: RefObject<HTMLDivElement>;
    distance: number;
    angle: number;
    cards: Array<JSX.Element>;
}

export const Gallery = ({ containerRef, distance, angle, cards }: Props) => {
    const innerContainerClasses = cn({
        carousel_inner_container: cards.length === 3,
        carousel_inner_container_hidden: cards.length > 3
    });
    return (
        <div className={innerContainerClasses}>
            <div className='carousel_container' ref={containerRef}>
                <div
                    className='carousel_element'
                    style={{ transform: `translateZ(${distance}px)` }}
                >
                    {cards[0]}
                </div>
                {distance &&
                    cards.map((el, i) => {
                        if (i !== 0) {
                            return (
                                <div
                                    key={i}
                                    className='carousel_element'
                                    style={{
                                        transform: `rotateY(${i * angle}deg) translateZ(${distance}px)`
                                    }}
                                >
                                    {el}
                                </div>
                            );
                        }
                        return null;
                    })}
            </div>
        </div>
    );
};
