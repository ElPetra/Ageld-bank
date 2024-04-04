import { Text } from 'src/shared/ui';

import {
    ALL_CARD,
    DEBET_CARD,
    MIR_CARD,
    VISA_CARD,
    СREDIT_CARD
} from '../../model';

import './styles.scss';
import type { Dispatch, SetStateAction } from 'react';

import type { CardType } from 'src/widgets/cards/lib';
import { useEffect, useState } from 'react';

interface CardFilter {
    text: string;
}
interface CardFilterPayment {
    text: string;
}

interface FiltersCardBarProps {
    current: string;
    setCurrent: Dispatch<SetStateAction<CardType>>;
}

const filters: CardFilter[] = [
    { text: ALL_CARD },
    { text: DEBET_CARD },
    { text: СREDIT_CARD }
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
    useEffect(() => {
        console.log(current);
    }, [current]);
    const [activeFilter, setActiveFilter] = useState<string>(filters[0].text);
    const currentFilters = current === 'type' ? filters : filtersPay;
    return (
        <div className='account__filters-bar'>
            {currentFilters.map((el, i) => (
                <button
                    onClick={() => {
                        setCurrent(el.text as CardType);
                        setActiveFilter(el.text);
                    }}
                    key={i}
                    className={`account__filters-bar__button ${activeFilter === el.text ? 'active' : ''}`}
                >
                    <Text weight='medium'>{el.text}</Text>
                </button>
            ))}
        </div>
    );
};
