import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetAccountDetailsQuery } from 'src/shared/api';
import { ACCOUNTS, RouteName } from 'src/shared/model';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';
import { useTranslation } from 'react-i18next';

import { AccountInfo } from './account-info';
import { AccountOperations } from './account-operations';

export const AccountPage = () => {
    const { id } = useParams();
    const { signedOut } = useAuth();
    const { t } = useTranslation();
    const {
        data: account,
        isLoading,
        error
    } = useGetAccountDetailsQuery({
        number: id || ''
    });

    useEffect(() => {
        if (error) {
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
                    {account ? (
                        <Menu
                            variant='secondary'
                            elements={[
                                {
                                    id: 1,
                                    name: t('Информация о счете'),
                                    component: <AccountInfo account={account} />
                                },
                                {
                                    id: 2,
                                    name: t('История операций'),
                                    component: <AccountOperations />
                                }
                            ]}
                        />
                    ) : (
                        <MessageCard
                            title={t('Счет не найден')}
                            buttonText={t('Перейти к списку счетов')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
