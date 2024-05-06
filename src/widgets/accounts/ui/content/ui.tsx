import { AccountCard } from 'src/entities/accounts';
import { MessageCard } from 'src/entities/message';

import { CREATE, CREATE_ACCOUNT, RouteName } from 'src/shared/model';
import { Columns } from 'src/shared/ui';

import { ACCOUNTS_NOT_FOUND } from '../../model';

import type { Account } from 'src/shared/model';

interface Props {
    content: Account[];
}

export const AccountContent = ({ content }: Props) => {
    return (
        <div className='account__content'>
            {content.length ? (
                <Columns number='3'>
                    {content.map(el => (
                        <AccountCard key={el.id} account={el} />
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
