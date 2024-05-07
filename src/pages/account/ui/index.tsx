import { useParams } from 'react-router-dom';

import { Container } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';
import { MessageCard } from 'src/entities/message';

import { accounts } from 'src/widgets/accounts/model';

import { ACCOUNT_INFO, ACCOUNT_OPERATIONS } from '../model';

import { AccountInfo } from './account-info';
import { AccountOperations } from './account-operations';

export const AccountPage = () => {
    const { id } = useParams();
    const account = accounts.find(el => el.id === id);
    return (
        <Container>
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
                <MessageCard title='Счет не найден' />
            )}
        </Container>
    );
};
