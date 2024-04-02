import { Text } from 'src/shared/ui';

import { cards, ALL_CURRENCY, DEBET_CARD, СREDIT_CARD } from '../../model';

import './styles.scss';
import { FiltersBar } from 'src/widgets/accounts/ui/filter/index.js';
import { useAccountsFilter } from 'src/widgets/accounts/lib/index.js';
import { accounts } from 'src/widgets/accounts/model/index.js';
import { useCardsFilter } from 'src/widgets/cards/lib/index.js';

interface CardFilter {
    text: string;
}

interface Props {
    current: string;
    setCurrent: (el: string) => void;
}

const filters: CardFilter[] = [
    { text: ALL_CURRENCY },
    { text: DEBET_CARD },
    { text: СREDIT_CARD }
];

export const FiltersCardBar = ({ current, setCurrent }: Props) => {
    const [[currency, setCurrency], getSelectedAccounts] =
        useCardsFilter(cards);
    return (
        <div className='filters'>
            <div className='account__filters-bar'>
                {filters.map((el, i) => (
                    <button
                        onClick={() => setCurrent(el.text)}
                        key={i}
                        className={`account__filters-bar__button ${current === el.text ? 'active' : ''}`}
                    >
                        <Text weight='medium'>{el.text}</Text>
                    </button>
                ))}
            </div>
            <FiltersBar current={currency} setCurrent={setCurrency} />
        </div>
    );
};
