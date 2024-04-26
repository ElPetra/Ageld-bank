import { Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    filters: readonly string[];
    current: string;
    setCurrent: (el: string) => void;
}

export const FilterBar = ({ filters, current, setCurrent }: Props) => {
    return (
        <div className='filter-bar'>
            {filters.map(el => (
                <button
                    onClick={() => setCurrent(el)}
                    key={el}
                    className={`filter-bar__button ${current === el ? 'active' : ''}`}
                >
                    <Text weight='medium'>{el}</Text>
                </button>
            ))}
        </div>
    );
};
