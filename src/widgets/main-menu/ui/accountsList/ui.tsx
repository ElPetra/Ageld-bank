import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import { MediumCardAccountInfo } from 'src/entities/cards/medium-card-account-info';

import { SectionHeader } from '../sectionHeader';

import styles from './styles.module.scss';

import type { AccountDetails } from 'src/shared/model';

// TODO заменить на запрос к серверу
const tempData: AccountDetails[] = [
    {
        number: '11111111111111111111',
        name: 'Кредитный счет',
        isMaster: true,
        type: 'credit',
        currency: 'rub',
        status: 'active',
        balance: 4000,
        createdAt: '',
        closedAt: '',
        blockReason: '',
        blockComment: ''
    },
    {
        number: '12341234123412341234',
        name: 'Кредитный счет',
        isMaster: false,
        type: 'credit',
        currency: 'eur',
        status: 'blocked',
        balance: 10000,
        createdAt: '',
        closedAt: '',
        blockReason: '',
        blockComment: ''
    },
    {
        number: '45894589458945894589',
        name: 'Депозитный счет',
        isMaster: false,
        type: 'deposit',
        currency: 'usd',
        status: 'active',
        balance: 5500,
        createdAt: '',
        closedAt: '',
        blockReason: '',
        blockComment: ''
    }
];
type TAccountsList = { className?: string };

export const AccountsList = ({ className }: TAccountsList) => {
    const { t } = useTranslation();
    return (
        <div
            className={
                className
                    ? classNames(className, styles.listContainer)
                    : styles.listContainer
            }
        >
            <SectionHeader header={t('my accounts')} />
            <div className={styles.cards}>
                {tempData.map(card => (
                    <MediumCardAccountInfo key={card.number} {...card} />
                ))}
            </div>
        </div>
    );
};
