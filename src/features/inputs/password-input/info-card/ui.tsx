import { memo } from 'react';
import { Icon, type SvgIconName, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    testId?: string;
    icon: SvgIconName;
    color?: 'inherit' | 'success' | 'error';
    message: string;
}

export const InfoCard = memo(({ icon, color, message, testId }: Props) => {
    return (
        <div className='info_card' data-testid={testId}>
            <Icon shouldExistTestId={true} icon={icon} width={16} height={16} />
            <Text size='xs' color={color}>
                {message}
            </Text>
        </div>
    );
});
