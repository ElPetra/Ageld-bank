/* eslint-disable react/prop-types */
import { MediumCardPaymentCard } from 'src/entities/cards';
import { Button } from 'src/shared/ui';

import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import { SectionHeader } from '../sectionHeader';

import styles from './styles.module.scss';

import type { CustomerCard } from 'src/shared/model';

// TODO заменить на запрос к серверу
const tempData: CustomerCard[] = [
    {
        active: true,
        id: '1',
        number: '3356335633563356',
        expires: '03/27',
        image: '',
        status: 'active',
        balance: 30000,
        currency: 'rub',
        isVirtual: false,
        name: '',
        type: 'DEBIT',
        paySystem: 'gold'
    },
    {
        active: true,
        id: '2',
        number: '3546354635463546',
        expires: '03/27',
        image: '',
        status: 'active',
        balance: 30000,
        currency: 'rub',
        isVirtual: false,
        name: '',
        type: 'CREDIT',
        paySystem: 'classic-junior'
    },
    {
        active: true,
        id: '3',
        number: '4376437643764376',
        expires: '03/27',
        image: '',
        status: 'active',
        balance: 20000,
        currency: 'rub',
        isVirtual: false,
        name: '',
        type: 'CREDIT',
        paySystem: 'premium'
    }
];

export const CardsList: React.FC<{ className?: string }> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div
            className={
                className
                    ? classNames(className, styles.listContainer)
                    : styles.listContainer
            }
        >
            <SectionHeader header={t('my cards')} />
            {tempData.map(card => (
                <MediumCardPaymentCard key={card.id} {...card} />
            ))}
            <Button variant='secondary' width='max'>
                {t('create card')}
            </Button>
        </div>
    );
};
