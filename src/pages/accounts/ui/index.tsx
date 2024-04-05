import { useParams } from 'react-router-dom';

import { Menu } from 'src/features/menu';
import { BackLink } from 'src/features/go-back';

import { accounts } from 'src/widgets/accounts/model';

import { ACCOUNT_INFO, ACCOUNT_OPERATIONS } from '../model';

import { AccountInfo } from './account-info';
import { AccountOperations } from './account-operations';

export const AccountPage = () => {
    const { id } = useParams();
    const account = accounts.find(el => el.id === id)!;
    return (
        <>
            <BackLink />
            <Menu
                variant={'secondary'}
                elements={[
                    {
                        id: 1,
                        name: ACCOUNT_INFO,
                        component: <AccountInfo account={account}/>
                    },
                    {
                        id: 2,
                        name: ACCOUNT_OPERATIONS,
                        component: <AccountOperations />
                    }
                ]}
            />
        </>
    );
};
