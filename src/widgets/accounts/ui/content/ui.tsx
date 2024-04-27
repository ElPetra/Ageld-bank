import { AccountCard } from 'src/entities/accounts';
import { MessageCard } from 'src/entities/message';

import { CREATE, CREATE_ACCOUNT, RouteName } from 'src/shared/model';

import { ACCOUNTS_NOT_FOUND } from '../../model';

import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    content: Account[];
}

export const AccountContent = ({ content }: Props) => {
    return (
        <div className='account__content'>
            {content.length ? (
                <div className='account__card-list'>
                    {content.map(el => (
                        <AccountCard key={el.id} account={el} />
                    ))}
                </div>
            ) : (
                <MessageCard
                    text={ACCOUNTS_NOT_FOUND}
                    buttonText={CREATE_ACCOUNT}
                    buttonLink={RouteName.ACCOUNT_PAGE + '/' + CREATE}
                />
            )}
        </div>
    );
};
