import { useNavigate } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

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
            <Icon icon='arrow' />
            <Text weight='medium'>Назад</Text>
        </button>
    );
};
