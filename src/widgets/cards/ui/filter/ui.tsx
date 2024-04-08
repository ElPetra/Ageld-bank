import { Text } from 'src/shared/ui';
import classNames from 'classnames';
import { useState } from 'react';

import {
    ALL_CARD,
    DEBET_CARD,
    MIR_CARD,
    VISA_CARD,
    CREDIT_CARD
} from '../../model';

import type { CardType, PaymentType } from 'src/widgets/cards/lib';

interface CardFilter {
    text: string;
}
interface CardFilterPayment {
    text: string;
}

interface FiltersCardBarProps {
    current: string;
    setCurrent: (value: CardType | PaymentType) => void;
}

const filters: CardFilter[] = [
    { text: ALL_CARD },
    { text: DEBET_CARD },
    { text: CREDIT_CARD }
];

const filtersPay: CardFilterPayment[] = [
    { text: ALL_CARD },
    { text: MIR_CARD },
    { text: VISA_CARD }
];

export const FiltersCardBar = ({
    current,
    setCurrent
}: FiltersCardBarProps) => {
    const [activeFilter, setActiveFilter] = useState<string>(filters[0].text);
    const currentFilters = current === 'type' ? filters : filtersPay;

    return (
        <div className='account__filters-bar'>
            {currentFilters.map((el, i) => (
                <button
                    onClick={() => {
                        setCurrent(el.text);
                        setActiveFilter(el.text);
                    }}
                    key={i}
                    className={classNames('account__filters-bar__button', {
                        active: activeFilter === el.text
                    })}
                >
                    <Text weight='medium'>{el.text}</Text>
                </button>
            ))}
        </div>
    );
};
