import { UniversalDepositCard } from 'src/entities/deposits';

import type { CustomerDeposit, DepositProfitability } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposits: CustomerDeposit[] | DepositProfitability[];
}

export const UniversalDepositsList = ({ deposits }: Props) => {
    return (
        <div className='universal-deposits-list'>
            {deposits.map(el => (
                <UniversalDepositCard key={el.id} deposit={el} />
            ))}
        </div>
    );
};
