import { useState } from 'react';
import { Icon, Label, Text } from 'src/shared/ui';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { currencySign } from 'src/shared/lib';

import {
    ACCOUNT_NUMBER_REPLACEMENT,
    type AccountDetails
} from 'src/shared/model';

import styles from './styles.module.scss';

export const MediumCardAccountInfo = (props: AccountDetails) => {
    const { number, name, balance, status, currency, isMaster } = props;

    const [isShowNumber, setIsShowNumber] = useState(false);

    const { t } = useTranslation();
    return (
        <Link to={''} className={styles.mediumCardInfo}>
            <div className={styles.container}>
                <div className={styles.firstColumn}>
                    <p className={styles.currency}>{currencySign(currency)}</p>
                    <div className={styles.number}>
                        <Text weight='medium'>
                            {isShowNumber
                                ? number
                                : number.replace(
                                      /.{16}/gm,
                                      ACCOUNT_NUMBER_REPLACEMENT
                                  )}
                        </Text>
                        <button
                            aria-label='Показать номер счета полностью'
                            type='button'
                            onClick={e => {
                                e.preventDefault();
                                setIsShowNumber(state => !state);
                            }}
                        >
                            <Icon
                                icon={isShowNumber ? 'eye-close' : 'eye-open'}
                            />
                        </button>
                    </div>
                    <Text weight='medium'>{t(name)} </Text>
                </div>
                <div className={styles.secondColumn}>
                    <div className={styles.labels}>
                        {isMaster && (
                            <Label info={t('main account')} mode={'error'} />
                        )}
                        <Label
                            info={t(`status ${status}`)}
                            mode={status === 'active' ? 'success' : 'warning'}
                        />
                    </div>
                    <Text
                        size='m'
                        weight='medium'
                        tag='p'
                        className={styles.balance}
                    >
                        {balance.toLocaleString('ru-RU')}{' '}
                        <Text size='s' weight='medium' tag='span'>
                            {currencySign(currency)}
                        </Text>
                    </Text>
                </div>
            </div>
        </Link>
    );
};
