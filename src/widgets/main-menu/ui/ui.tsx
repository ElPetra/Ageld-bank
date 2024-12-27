import { useTranslation } from 'react-i18next';
import { Icon, Input } from 'src/shared/ui';

import { useAuth } from 'src/entities/user';

import { Image, Text } from 'src/shared/ui';

import { CardsList } from './cardsList';

import styles from './styles.module.scss';
import { TransfersList } from './transfersList';
import { PaymentsList } from './paymentsList';
import { AccountsList } from './accountsList';
import { MainInfo } from './info';
import { MainCarousel } from './carousel';

export function MainMenu() {
    const { t } = useTranslation();
    const { authStatus } = useAuth();

    return authStatus === 'SignedIn' ? (
        <div className={styles.mainMenuContainer}>
            <CardsList className={styles.cards} />
            <Input width='max' label={t('search')}>
                <Icon icon={'search'} />
            </Input>
            <TransfersList className={styles.transfers} />
            <PaymentsList className={styles.payments} />
            <AccountsList className={styles.accounts} />
        </div>
    ) : (
        <div className={styles.mainMenuGuestContainer}>
            <Text tag='h1' weight='bold' size='l'>
                {t('Банк A-Geld - место, где работают ваши деньги')}
            </Text>
            <div className={styles.mainMenuGuest}>
                <MainInfo />
                <MainCarousel />
                <Image width={390} image='laptop-guy' />
            </div>
        </div>
    );
}
