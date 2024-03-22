import { Text } from 'src/shared/ui';

import {
    ALL_CURRENCY,
    EUR,
    RUB,
    USD
} from 'src/widgets/accounts/model/constants';
interface AccountFilter {
    text: string;
}

interface Props {
    currentFilter: string;
    onClick: (el: string) => void;
}
const filters: AccountFilter[] = [
    { text: ALL_CURRENCY },
    { text: RUB },
    { text: USD },
    { text: EUR }
];
export const CurrencyFilter = ({ currentFilter, onClick }: Props) => {
    return (
        <ul className='accounts-filter filter-currency'>
            {filters.map((el, i) => (
                <li
                    onClick={() => onClick(el.text)}
                    key={i}
                    className={`accounts-filter_tab-currency ${currentFilter === el.text ? 'currency-active' : ''}`}
                >
                    <Text weight='medium'>{el.text}</Text>
                </li>
            ))}
        </ul>
    );
};
