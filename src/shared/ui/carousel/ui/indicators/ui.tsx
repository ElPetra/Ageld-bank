import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    changeRotateByIndicator: (indicator: number) => void;
    active: number;
    cards: ReactNode[];
}

export const CarouselIndicators = ({
    changeRotateByIndicator,
    active,
    cards
}: Props) => {
    const indicatorClasses = (index: number) =>
        cn('carousel-indicators__indicator', {
            active: active == index
        });
    return (
        <div className='carousel-indicators'>
            {cards.map((_, index) => (
                <button
                    key={index}
                    className={indicatorClasses(index)}
                    onClick={() => changeRotateByIndicator(index)}
                />
            ))}
        </div>
    );
};
