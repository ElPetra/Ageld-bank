import { Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    title: string;
    children: ReactNode;
}

export const Segment = ({ title, children }: Props) => {
    return (
        <div className='segment'>
            <Text size='m' weight='medium'>
                {title}
            </Text>
            {children}
        </div>
    );
};
