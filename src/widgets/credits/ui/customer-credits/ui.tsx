// import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { useGetCustomerCardsQuery } from 'src/shared/api';
// import { isErrorStatusUnauthorized } from 'src/shared/lib';
// import { useAuth } from 'src/entities/user';
import { ProductStatuses } from 'src/entities/product';
import { CreditCard } from 'src/entities/credits';
import { MessageCard } from 'src/entities/message';
import {
    creditStatuses,
    CREDITS_PRODUCTS,
    creditStatusesToText,
    RouteName
} from 'src/shared/model';
import { Checkbox, Text } from 'src/shared/ui';

import type { Credit } from 'src/shared/model';

import './styles.scss';

const mockCredit: Credit[] = [
    {
        id: '1',
        name: 'Срочный',
        currency: 'rub',
        status: 'active',
        percentRate: 15.5,
        term: 12,
        paymentDate: '2024-09-01 00:00:00+00',
        payment: 18000
    },
    {
        id: '2',
        name: 'Срочный',
        currency: 'rub',
        status: 'overdue',
        percentRate: 15.5,
        term: 12,
        paymentDate: '2024-08-17 00:00:00+00',
        payment: 10000,
        debt: 10000
    },
    {
        id: '3',
        name: 'Срочный',
        currency: 'rub',
        status: 'closed',
        percentRate: 15,
        term: 36,
        repaymentDate: '2024-08-01 00:00:00+00'
    }
];

export const CustomerCredits = () => {
    const { t } = useTranslation();
    const [showClosed, setShowClosed] = useState<boolean>(false);

    // const { signedOut } = useAuth();
    // const { data: credits = [], isLoading, error } = useGetCustomerCreditsQuery();
    //
    // useEffect(() => {
    //     if (isErrorStatusUnauthorized(error)) {
    //         return signedOut();
    //     }
    // }, [error, signedOut]);

    return (
        <div className='customer-credits'>
            <Checkbox onChange={() => setShowClosed(prev => !prev)}>
                <Text align='center'>{t('Отобразить неактивные кредиты')}</Text>
            </Checkbox>
            {mockCredit.length ? (
                <div className='customer-credits__list'>
                    {mockCredit
                        .filter(
                            el =>
                                !('status' in el) ||
                                showClosed ||
                                el.status !== 'closed'
                        )
                        .map(el => (
                            <CreditCard key={el.id} credit={el}>
                                <ProductStatuses
                                    isMaster={false}
                                    status={creditStatuses[el.status]}
                                    text={creditStatusesToText[el.status]}
                                />
                            </CreditCard>
                        ))}
                </div>
            ) : (
                <MessageCard
                    title={t('На данный момент \n у вас нет открытых кредитов')}
                    buttonText={t('Просмотреть кредитные продукты')}
                    buttonLink={RouteName.MAIN_PAGE + '/' + CREDITS_PRODUCTS}
                />
            )}
        </div>
    );
};
