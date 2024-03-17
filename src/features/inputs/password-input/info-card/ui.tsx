import { memo } from 'react';
import { Icon, type SvgIconNames, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    icon: SvgIconNames;
    color?: 'inherit' | 'success' | 'error';
    message: string;
}

export const InfoCard = memo(({ icon, color, message }: Props) => {
    return (
        <div className='info_card'>
            <Icon icon={icon} width={16} height={16} />
            <Text
                size='xs'
                color={
                    color ||
                    (icon === 'success' || icon === 'error' ? icon : 'inherit')
                }
            >
                {message}
            </Text>
        </div>
    );
});
