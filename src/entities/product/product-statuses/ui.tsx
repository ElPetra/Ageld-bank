import { useTranslation } from 'react-i18next';

import { Text } from 'src/shared/ui';
import { productStatuses } from 'src/shared/model';

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
    const { t } = useTranslation();
    return (
        <div className={`product-statuses product-statuses__${direction}`}>
            {isMaster && (
                <div className='product-statuses__status product-statuses__status__type-main'>
                    <Text
                        weight='medium'
                        size={direction === 'column' ? 'xxs' : 's'}
                    >
                        {t('Основной')}
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
                    {t(productStatuses[status])}
                </Text>
            </div>
        </div>
    );
};
