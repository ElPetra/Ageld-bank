import { Link } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import type { Detail } from 'src/shared/model';

import './style.scss';

interface Props {
    detail: Detail;
}

export const DetailsItem = ({ detail }: Props) => {
    return (
        <Link to='/' className='detail'>
            <div className='detail__icon-container'>
                <Icon icon={detail.icon} className='detail__icon' />
            </div>
            <Text weight='medium'>{detail.name}</Text>
        </Link>
    );
};
