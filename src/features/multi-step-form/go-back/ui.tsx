import { useNavigate } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';
import i18n from 'src/shared/model/i18n';

interface Props {
    onClick?: () => void;
}

export const BackButton = ({ onClick }: Props) => {
    const navigate = useNavigate();

    return (
        <button
            className={`back-button ${!onClick && 'back-button__top'}`}
            onClick={() => (onClick ? onClick() : navigate(-1))}
        >
            <Icon icon='arrow-icon' />
            <Text weight='medium'>{i18n.t('Назад')}</Text>
        </button>
    );
};
