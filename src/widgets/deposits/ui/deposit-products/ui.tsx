import { useGetDepositProductsQuery } from 'src/shared/api';

import { DepositList } from './deposit-list';
import { DepositCalculator } from './deposit-calculator';

import './styles.scss';

export const DepositProducts = () => {
    const { data: deposits = [], isLoading } = useGetDepositProductsQuery();

    return (
        <div className='deposit-products'>
            <DepositList deposits={deposits} isLoading={isLoading} />
            {!isLoading && <DepositCalculator deposits={deposits} />}
        </div>
    );
};
