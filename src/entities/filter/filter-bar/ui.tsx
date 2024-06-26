import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from 'src/shared/ui';

import './styles.scss';

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
                    className={cn('filter-bar__button', variant, {
                        active: current === el
                    })}
                >
                    <Text weight='medium'>{t(el)}</Text>
                </button>
            ))}
        </div>
    );
};
