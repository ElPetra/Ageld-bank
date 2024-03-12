import { memo } from 'react';
import { Icon, type SvgIconNames, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    icon: SvgIconNames;
    message: string;
}

export const InfoCard = memo(({ icon, message }: Props) => {
    return (
        <div className='info_card'>
            <Icon icon={icon} width={16} height={18} />
            <Text
                size='xs'
                color={
                    icon === 'success' || icon === 'error' ? icon : 'inherit'
                }
            >
                {message}
            </Text>
        </div>
    );
});
