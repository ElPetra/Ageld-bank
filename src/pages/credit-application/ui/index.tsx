// import { useEffect } from 'react';
import { useNavigate /* useParams */ } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    creditApplicationStatusesToInfo,
    CREDITS,
    RouteName
} from 'src/shared/model';
// import { isErrorStatusUnauthorized } from 'src/shared/lib';
// import { useGetCreditDetailsQuery } from 'src/shared/api';
import { Button, Container, Preloader, Text } from 'src/shared/ui';
// import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

import { CreditApplicationCard } from './credit-application-card';

import type { CreditApplicationDetails } from 'src/shared/model';

import './styles.scss';

const credit: CreditApplicationDetails = {
    id: '1',
    name: 'Наличными',
    currency: 'rub',
    status: 'processing',
    amount: 5750,
    applicationDate: '2024-09-01 00:00:00+00',
    number: '40111111111111111',
    percentRate: 15.5,
    reviewPeriod: 2,
    term: 6,
    rateType: 'fixed',
    methodObtaining: 'cash',
    isEarlyRepayment: true
};

export const CreditApplicationPage = () => {
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
                        <div className='credit-application'>
                            <div className='credit-application__title'>
                                <Text size='l' weight='bold'>
                                    {t('Заявка на кредит')}
                                </Text>
                                <div>
                                    {
                                        creditApplicationStatusesToInfo[
                                            credit.status
                                        ]
                                    }
                                </div>
                                {(credit.status === 'approved' ||
                                    credit.status === 'confirmed') && (
                                    <div>
                                        <Button variant='link'>
                                            {t('Кредитный договор')}
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <CreditApplicationCard credit={credit} />
                        </div>
                    ) : (
                        <MessageCard
                            title={t('Заявка на кредит не найдена')}
                            buttonText={t('Перейти к кредитам')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + CREDITS}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
