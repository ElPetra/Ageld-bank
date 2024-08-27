import { useTranslation } from 'react-i18next';

import { Text } from 'src/shared/ui';

import type { Status } from 'src/shared/model';

import './styles.scss';

interface Props {
    isMaster: boolean;
    status: Status;
    text: string;
    direction?: 'column' | 'row';
}

export const ProductStatuses = ({
    isMaster,
    status,
    text,
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
                    {text}
                </Text>
            </div>
        </div>
    );
};
