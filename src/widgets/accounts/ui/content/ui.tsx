import { AccountCard } from './card';
import { AccountNotFound } from './not-found';

import type { Account } from '../../model';

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
                <AccountNotFound />
            )}
        </div>
    );
};
