import i18next from 'src/shared/model/i18n';

import { Text } from 'src/shared/ui';
import { MASTER_PRODUCT, productStatuses } from 'src/shared/model';

import type { ProductStatus } from 'src/shared/model';

import './styles.scss';

interface Props {
    isMaster: boolean;
    status: ProductStatus;
    direction?: 'column' | 'row';
}

export const ProductStatuses = ({
    isMaster,
    status,
    direction = 'row'
}: Props) => {
    return (
        <div className={`product-statuses product-statuses__${direction}`}>
            {isMaster && (
                <div className='product-statuses__status product-statuses__status__type-main'>
                    <Text
                        weight='medium'
                        size={direction === 'column' ? 'xxs' : 's'}
                    >
                        {i18next.t(MASTER_PRODUCT)}
                    </Text>
                </div>
            )}
            <div
                className={`product-statuses__status product-statuses__status__type-${status}`}
            >
                <Text
                    weight='medium'
                    size={direction === 'column' ? 'xxs' : 's'}
                >
                    {i18next.t(productStatuses[status])}
                </Text>
            </div>
        </div>
    );
};
