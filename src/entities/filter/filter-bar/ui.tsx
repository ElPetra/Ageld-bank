import { Text } from 'src/shared/ui';

import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    filters: string[];
    current: string;
    setCurrent: (el: string) => void;
}

export const FilterBar = ({ filters, current, setCurrent }: Props) => {
    const { t } = useTranslation();
    return (
        <div className='filter-bar'>
            {filters.map(el => (
                <button
                    onClick={() => setCurrent(el)}
                    key={el}
                    className={`filter-bar__button ${current === el ? 'active' : ''}`}
                >
                    <Text weight='medium'>{t(el)}</Text>
                </button>
            ))}
        </div>
    );
};
