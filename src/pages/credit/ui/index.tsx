// import { useEffect } from 'react';
import { useNavigate /* useParams */ } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CREDITS, RouteName } from 'src/shared/model';
// import { isErrorStatusUnauthorized } from 'src/shared/lib';
// import { useGetCreditDetailsQuery } from 'src/shared/api';
import { Container, Preloader } from 'src/shared/ui';
// import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import { CreditInfo } from './credit-info';

import type { CreditDetails } from 'src/shared/model';

const credit: CreditDetails = {
    id: '1',
    name: 'Срочный',
    amount: 200000,
    remainPay: 110000,
    currency: 'rub',
    status: 'active',
    percentRate: 15.5,
    term: 12,
    paymentDate: '2024-08-17 00:00:00+00',
    payment: 18000,
    contractNumber: '12341234123412341234'
};

export const CreditPage = () => {
    // const { id } = useParams();
    const navigate = useNavigate();
    // const { signedOut } = useAuth();
    const { t } = useTranslation();
    const isLoading = false;
    // const {
    //     data: credit,
    //     isLoading,
    //     error
    // } = useGetCreditDetailsQuery({ id: id || '' });

    // useEffect(() => {
    //     if (isErrorStatusUnauthorized(error)) {
    //         return signedOut();
    //     }
    // }, [error, signedOut]);

    return (
        <Container>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <BackButton
                        onTop={true}
                        onClick={() =>
                            navigate(RouteName.MAIN_PAGE + '/' + CREDITS)
                        }
                    />
                    {credit ? (
                        <CreditInfo credit={credit} />
                    ) : (
                        <MessageCard
                            title={t('Кредит не найден')}
                            buttonText={t('Перейти к списку кредитов')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + CREDITS}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
