import { ReactNode } from 'react';

import { Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    children?: ReactNode;
    fullName?: string;
}

export const UserCard = ({ fullName, children }: Props) => {
    return (
        <div className='user-card'>
            <Text size='l' weight='bold'>
                {fullName}
            </Text>
            {children}
        </div>
    );
};
