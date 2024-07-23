import { useTranslation } from 'react-i18next';

import { DEPOSITS, DEPOSITS_PRODUCTS, RouteName } from 'src/shared/model';
import { useGetCustomerDepositsQuery } from 'src/shared/api';
import { Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { UniversalDepositsList } from 'src/features/universal-deposit-list';

export const CustomerDeposits = () => {
    const { t } = useTranslation();
    const { data: deposits = [], isLoading } = useGetCustomerDepositsQuery();
    return isLoading ? (
        <Preloader />
    ) : (
        <>
            {deposits.length ? (
                <UniversalDepositsList deposits={deposits} />
            ) : (
                <MessageCard
                    title={t('На данный момент \n у Вас нет депозитов')}
                    buttonText={t('Оформить депозит')}
                    buttonLink={
                        RouteName.MAIN_PAGE +
                        '/' +
                        DEPOSITS +
                        '/' +
                        DEPOSITS_PRODUCTS
                    }
                />
            )}
        </>
    );
};
