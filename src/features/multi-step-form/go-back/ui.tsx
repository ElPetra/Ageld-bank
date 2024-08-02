import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    onTop?: boolean;
    onClick?: () => void;
}

export const BackButton = ({ onTop, onClick }: Props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const backButtonClass = cn('back-button', {
        'back-button__top': !onClick || onTop
    });

    return (
        <button
            className={backButtonClass}
            onClick={() => (onClick ? onClick() : navigate(-1))}
        >
            <Icon icon='arrow-left-accent' />
            <Text weight='medium'>{t('Назад')}</Text>
        </button>
    );
};
