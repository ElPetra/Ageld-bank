import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetAccountDetailsQuery } from 'src/shared/api';
import { ACCOUNTS, GO_TO_ACCOUNT_LIST, RouteName } from 'src/shared/model';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';

import { ACCOUNT_INFO, ACCOUNT_OPERATIONS } from '../model';

import { AccountInfo } from './account-info';
import { AccountOperations } from './account-operations';

export const AccountPage = () => {
    const { id } = useParams();
    const { signedOut } = useAuth();
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
                                    name: ACCOUNT_INFO,
                                    component: <AccountInfo account={account} />
                                },
                                {
                                    id: 2,
                                    name: ACCOUNT_OPERATIONS,
                                    component: <AccountOperations />
                                }
                            ]}
                        />
                    ) : (
                        <MessageCard
                            title='Счет не найден'
                            buttonText={GO_TO_ACCOUNT_LIST}
                            buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
