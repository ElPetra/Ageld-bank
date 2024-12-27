/* eslint-disable react/prop-types */
import { Text } from 'src/shared/ui';
// import { formatExpirationDate } from 'src/shared/lib';
import { currencySign } from 'src/shared/lib';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import styles from './styles.module.scss';

import type { CustomerCard } from 'src/shared/model';

export const MediumCardPaymentCard: React.FC<CustomerCard> = props => {
    const { number, type, currency, expires, paySystem, balance } = props;
    const { t } = useTranslation();
    return (
        <div className={styles.mediumCardInfo}>
            <div className={styles.firstRow}>
                <p className={styles.currency}>{currencySign(currency)}</p>
                <div className={styles.totalAndType}>
                    <Text size='m' weight='medium'>
                        {balance.toLocaleString('ru-RU')}
                    </Text>
                    <Text size='s' color='tertiary'>
                        {type === 'DEBIT'
                            ? t('card type debit')
                            : t('card type credit')}
                    </Text>
                </div>
            </div>
            <div className={styles.secondRow}>
                <div className={classNames(styles.card, styles[paySystem])}>
                    <p className={styles.cardNumber}>
                        {number.substring(12, 16)}
                    </p>
                    <p className={styles.paySystem}>MIR</p>
                </div>
                <Text size='xs'>{expires}</Text>
                {/* <Text size='xs'>{formatExpirationDate(expires)}</Text> */}
            </div>
        </div>
    );
};
