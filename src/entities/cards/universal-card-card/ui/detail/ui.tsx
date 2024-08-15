import { Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    value: ReactNode;
    description: string;
}

export const Detail = ({ value, description }: Props) => {
    return (
        <div>
            <Text size='m' weight='medium'>
                {value}
            </Text>
            <Text size='xs' color='tertiary'>
                {description}
            </Text>
        </div>
    );
};
