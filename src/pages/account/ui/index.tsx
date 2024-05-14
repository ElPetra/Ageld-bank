import { useParams } from 'react-router-dom';

import { ACCOUNTS, RouteName } from 'src/shared/model';
import { Container } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';
import { MessageCard } from 'src/entities/message';
import { GO_TO_ACCOUNT_LIST } from 'src/pages/account-creation/model';

import { ACCOUNT_INFO, ACCOUNT_OPERATIONS } from '../model';
import { AccountInfo } from './account-info';
import { AccountOperations } from './account-operations';

import type { AccountDetails } from 'src/shared/model';

export const accounts: AccountDetails[] = [
    {
        status: 'active',
        number: '3212131213211111',
        id: 'qwerty_1',
        balance: '550',
        currency: 'rub',
        type: 'credit',
        master: true,
        created: new Date(),
        contractNumber: '12312312132211212312',
        icon: 'rub'
    },
    {
        status: 'closed',
        number: '3212131213211111',
        id: 'qwerty_2',
        balance: '900',
        currency: 'eur',
        type: 'credit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312',
        closed: new Date(),
        icon: 'eur'
    },
    {
        status: 'blocked',
        number: '3212131213211111',
        id: 'qwerty_3',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312',
        blockReason: 'Плохо себя вёл',
        icon: 'usd'
    },
    {
        status: 'active',
        number: '321213121322211111',
        id: 'qwerty_4',
        balance: '10000',
        currency: 'usd',
        type: 'deposit',
        master: false,
        created: new Date(),
        contractNumber: '12312312132211212312',
        icon: 'usd'
    }
];

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
                <MessageCard
                    title='Счет не найден'
                    buttonText={GO_TO_ACCOUNT_LIST}
                    buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                />
            )}
        </Container>
    );
};
