import { Text } from 'src/shared/ui';
import { DEBIT_ACCOUNT, accountStatuses } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

import './styles.scss';

interface Props {
    master: boolean;
    status: ProductStatus;
    direction?: 'column' | 'row';
}

export const AccountStatuses = ({
    master,
    status,
    direction = 'row'
}: Props) => {
    return (
        <div className={`account__statuses ${direction}`}>
            {master && (
                <div className='account__status account__status-type__main'>
                    <Text
                        weight='medium'
                        size={direction === 'column' ? 'xxs' : 's'}
                    >
                        {DEBIT_ACCOUNT}
                    </Text>
                </div>
            )}
            <div className={`account__status account__status-type__${status}`}>
                <Text
                    weight='medium'
                    size={direction === 'column' ? 'xxs' : 's'}
                >
                    {accountStatuses[status]}
                </Text>
            </div>
        </div>
    );
};
