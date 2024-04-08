import { Link, useLocation } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

export const CardInfo = () => {
    const { state } = useLocation();

    return (
        <>
            <Link className='back_link' to={state.from}>
                <Icon icon='arrow' />
                <Text>Назад</Text>
            </Link>
            <div>Информация о карточке</div>
        </>
    );
};
