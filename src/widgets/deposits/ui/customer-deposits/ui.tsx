import { useTranslation } from 'react-i18next';

import { CREATE, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { CustomerDepositCard } from 'src/entities/deposits';

import type { MockDeposit } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposits: MockDeposit[];
}

export const CustomerDeposits = ({ deposits }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            {deposits.length ? (
                <div className='customer-deposits-list'>
                    {deposits.map(el => (
                        <CustomerDepositCard key={el.id} deposit={el} />
                    ))}
                </div>
            ) : (
                <MessageCard
                    title={t('На данный момент \n у Вас нет депозитов')}
                    buttonText={t('Оформить депозит')}
                    buttonLink={RouteName.DEPOSIT_PAGE + '/' + CREATE}
                />
            )}
        </>
    );
};
