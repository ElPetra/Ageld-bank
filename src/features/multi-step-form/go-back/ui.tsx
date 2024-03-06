import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    onClick: () => void;
}

export const BackButton = ({ onClick }: Props) => (
    <div>
        <button className='back-button' onClick={onClick}>
            <Icon icon={'arrow'} />
            <Text weight={'medium'}>Назад</Text>
        </button>
    </div>
);
