import { Text } from 'src/shared/ui';

import { ALL_CURRENCY, EUR, RUB, USD } from '../../model';

import './styles.scss';

interface AccountFilter {
    text: string;
}

interface Props {
    current: string;
    setCurrent: (el: string) => void;
}

const filters: AccountFilter[] = [
    { text: ALL_CURRENCY },
    { text: RUB },
    { text: USD },
    { text: EUR }
];

export const FiltersBar = ({ current, setCurrent }: Props) => {
    return (
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
    );
};
