import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DEPOSITS, RouteName } from 'src/shared/model';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { useGetDepositDetailsQuery } from 'src/shared/api';
import { Container, Preloader } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';

import { DepositInfo } from './deposit-info';

export const DepositPage = () => {
    const { id } = useParams();
    const { signedOut } = useAuth();
    const { t } = useTranslation();
    const {
        data: deposit,
        isLoading,
        error
    } = useGetDepositDetailsQuery({ id: id || '' });

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

    return (
        <Container>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <BackButton />
                    {deposit ? (
                        <Menu
                            variant='secondary'
                            elements={[
                                {
                                    id: 1,
                                    name: t('Мои депозиты'),
                                    component: <DepositInfo deposit={deposit} />
                                }
                            ]}
                        />
                    ) : (
                        <MessageCard
                            title={t('Депозит не найден')}
                            buttonText={t('Перейти к списку депозитов')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
