import { AccountCard } from 'src/entities/accounts';
import { ProductNotFound } from 'src/entities/products';

import type { Account } from 'src/shared/model';

import { ACCOUNTS_NOT_FOUND, CREATE_ACCOUNT } from '../../model';

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
                <ProductNotFound
                    text={ACCOUNTS_NOT_FOUND}
                    buttonText={CREATE_ACCOUNT}
                />
            )}
        </div>
    );
};
