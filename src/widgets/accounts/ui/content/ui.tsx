import { AccountCard } from 'src/entities/accounts';
import { MessageCard } from 'src/entities/message';

import { CREATE, CREATE_ACCOUNT, RouteName } from 'src/shared/model';
import { Columns } from 'src/shared/ui';

import { ACCOUNTS_NOT_FOUND } from '../../model';

import type { Account } from 'src/shared/model';

interface Props {
    accounts: Account[];
}

export const AccountContent = ({ accounts }: Props) => {
    return (
        <div className='account__content'>
            {accounts.length ? (
                <Columns number='3'>
                    {accounts.map(el => (
                        <AccountCard key={el.accountNumber} account={el} />
                    ))}
                </Columns>
            ) : (
                <MessageCard
                    title={ACCOUNTS_NOT_FOUND}
                    buttonText={CREATE_ACCOUNT}
                    buttonLink={RouteName.ACCOUNT_PAGE + '/' + CREATE}
                />
            )}
        </div>
    );
};
