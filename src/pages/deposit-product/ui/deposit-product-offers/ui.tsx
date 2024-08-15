import { useGetDepositProductsQuery } from 'src/shared/api';
import { Columns, Icon, Preloader } from 'src/shared/ui';
import { SmallDepositCard } from 'src/entities/deposits';

import './styles.scss';

export const DepositProductOffers = () => {
    const { data: deposits = [], isLoading } = useGetDepositProductsQuery();
    return isLoading ? (
        <Preloader />
    ) : (
        <Columns number='3'>
            {deposits.length > 1 && (
                <>
                    <SmallDepositCard deposit={deposits[0]} />
                    <div className='deposit-product-offers__img'>
                        <Icon icon='deposit-lady' width={397} />
                    </div>
                    <SmallDepositCard deposit={deposits[1]} />
                </>
            )}
        </Columns>
    );
};
