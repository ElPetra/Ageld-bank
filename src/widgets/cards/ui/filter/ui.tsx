import { Text } from 'src/shared/ui';

import { ALL_CURRENCY, DEBET_CARD, СREDIT_CARD } from '../../model';

import './styles.scss';
import type { Dispatch, SetStateAction } from 'react';

interface CardFilter {
    text: string;
}
type CurrencyType = 'Кредитная' | 'Дебетовая' | 'Все';
interface FiltersCardBarProps {
    current: CurrencyType;
    setCurrent: Dispatch<SetStateAction<CurrencyType>>;
}

const filters: CardFilter[] = [
    { text: ALL_CURRENCY },
    { text: DEBET_CARD },
    { text: СREDIT_CARD }
];

export const FiltersCardBar = ({
    current,
    setCurrent
}: FiltersCardBarProps) => {
    return (
        <div className='filters'>
            <div className='account__filters-bar'>
                {filters.map((el, i) => (
                    <button
                        onClick={() => setCurrent(el.text as CurrencyType)}
                        key={i}
                        className={`account__filters-bar__button ${current === el.text ? 'active' : ''}`}
                    >
                        <Text weight='medium'>{el.text}</Text>
                    </button>
                ))}
            </div>
        </div>
    );
};
