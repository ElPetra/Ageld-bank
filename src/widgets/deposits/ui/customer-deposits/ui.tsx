import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { DEPOSITS, DEPOSITS_PRODUCTS, RouteName } from 'src/shared/model';
import { useGetDepositsQuery } from 'src/shared/api';
import { Preloader } from 'src/shared/ui';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { UniversalDepositsList } from 'src/features/universal-deposit-list';

export const CustomerDeposits = () => {
    const { t } = useTranslation();
    const { signedOut } = useAuth();
    const { data: deposits = [], isLoading, error } = useGetDepositsQuery();

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

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
