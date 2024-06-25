import { Text } from 'src/shared/ui';

import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    variant?: 'primary' | 'secondary';
    filters: string[];
    current: string;
    setCurrent: (el: string) => void;
}

export const FilterBar = ({
    variant = 'primary',
    filters,
    current,
    setCurrent
}: Props) => {
    const { t } = useTranslation();
    return (
        <div className={`filter-bar ${variant}`}>
            {filters.map(el => (
                <button
                    type='button'
                    onClick={() => setCurrent(el)}
                    key={el}
                    className={`filter-bar__button ${current === el ? 'active' : ''}  ${variant}`}
                >
                    <Text weight='medium'>{t(el)}</Text>
                </button>
            ))}
        </div>
    );
};
