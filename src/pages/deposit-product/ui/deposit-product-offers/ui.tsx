import { Columns, Icon } from 'src/shared/ui';
import { SmallDepositCard } from 'src/entities/deposits';

import type { DepositProduct } from 'src/shared/model';

import './styles.scss';

const deposits: DepositProduct[] = [
    {
        id: '123e4567-e89b-12d3-a456-426614174005',
        name: 'Депозит A-Geld Базовый',
        currency: 'rub',
        dayMin: 30,
        dayMax: 270,
        amountMin: 1000,
        amountMax: 100000,
        capitalization: 1,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 17.7
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174006',
        name: 'Депозит A-Geld Дополнительный',
        currency: 'eur',
        dayMin: 90,
        dayMax: 900,
        amountMin: 4000,
        amountMax: 50000,
        capitalization: 3,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 15.5
    }
];

export const DepositProductOffers = () => {
    return (
        <Columns number='3'>
            <SmallDepositCard deposit={deposits[0]} />
            <div className='deposit-product-offers__img'>
                <Icon icon='deposit-lady' width={397} />
            </div>
            <SmallDepositCard deposit={deposits[1]} />
        </Columns>
    );
};
