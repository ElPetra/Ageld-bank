import { memo } from 'react';
import { Icon, type SvgIconName, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    icon: SvgIconName;
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
                    (icon === 'success-icon' || icon === 'error-icon'
                        ? icon
                        : 'inherit')
                }
            >
                {message}
            </Text>
        </div>
    );
});
