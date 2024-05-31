import { AccountCard } from 'src/entities/accounts';
import { MessageCard } from 'src/entities/message';
import { ProductStatuses } from 'src/entities/product';
import { CREATE, RouteName } from 'src/shared/model';
import { Columns } from 'src/shared/ui';
import { useTranslation } from 'react-i18next';

import type { Account } from 'src/shared/model';

interface Props {
    accounts: Account[];
}

export const AccountList = ({ accounts }: Props) => {
    const { t } = useTranslation();
    return (
        <div>
            {accounts.length ? (
                <Columns number='3'>
                    {accounts.map(el => (
                        <AccountCard key={el.number} account={el}>
                            <ProductStatuses
                                isMaster={el.isMaster}
                                status={el.status}
                                direction='column'
                            />
                        </AccountCard>
                    ))}
                </Columns>
            ) : (
                <MessageCard
                    title={t(
                        'На данный момент \n у Вас нет соответствующих счетов'
                    )}
                    buttonText={t('Открыть счет')}
                    buttonLink={RouteName.ACCOUNT_PAGE + '/' + CREATE}
                />
            )}
        </div>
    );
};
