import { Icon, Text } from 'src/shared/ui';
import { memo } from 'react';

import '../styles.scss';

interface Props {
    isMatches: boolean;
    message: string;
}

export const PasswordMatchCard = memo(({ isMatches, message }: Props) => {
    const matchResult = isMatches === true ? 'success' : 'error';
    return (
        <div className='password-match_card'>
            {<Icon icon={matchResult} width={16} height={18} />}
            {
                <Text size='xs' color={matchResult}>
                    {message}
                </Text>
            }
        </div>
    );
});
