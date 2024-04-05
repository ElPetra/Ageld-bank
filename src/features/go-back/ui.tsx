import { Link, useLocation } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

export const BackLink = () => {
    const { state } = useLocation();

    return (
        <div className='back-link'>
            <Link to={state.from}>
                <Icon icon='arrow' />
                <Text weight={'medium'}>Назад</Text>
            </Link>
        </div>
    );
};
