import { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children?: ReactNode;
    fullName?: string;
}

export const Address = ({}: Props) => {
    return <div className='address'>Адрес</div>;
};
