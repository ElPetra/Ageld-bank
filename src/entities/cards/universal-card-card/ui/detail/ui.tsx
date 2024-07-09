import { Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    value: string;
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
