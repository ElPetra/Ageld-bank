// import { useGetDepositProductsQuery } from 'src/shared/api';
import { CreditList } from './credit-list';

import type { CreditProduct } from 'src/shared/model';

import './styles.scss';

const mockCredit: CreditProduct[] = [
    {
        id: '1',
        name: 'Кредит A-Geld Срочный',
        currency: 'rub',
        percentRate: 15.5,
        amountMin: 0,
        amountMax: 3000000,
        dayMin: 30,
        dayMax: 360
    },
    {
        id: '2',
        name: 'Кредит Моя квартира',
        currency: 'rub',
        percentRate: 13.5,
        amountMin: 0,
        amountMax: 500000000,
        dayMin: 30,
        dayMax: 3600
    },
    {
        id: '3',
        name: 'Кредит A-Geld Car',
        currency: 'rub',
        percentRate: 15,
        amountMin: 5,
        amountMax: 50000000,
        dayMin: 30,
        dayMax: 1800
    }
];

export const CreditProducts = () => {
    // const { data: credits = [], isLoading } = useGetDepositProductsQuery();
    return (
        <div className='credits-products'>
            <CreditList credits={mockCredit} isLoading={false} />
        </div>
    );
};
