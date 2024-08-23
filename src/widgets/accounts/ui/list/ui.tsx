import { AccountCard } from 'src/entities/accounts';
import { MessageCard } from 'src/entities/message';
import { ProductStatuses } from 'src/entities/product';
import {
    CREATE,
    productStatuses,
    productStatusesToText,
    RouteName
} from 'src/shared/model';
import { Checkbox, Columns, Text } from 'src/shared/ui';
import { useTranslation } from 'react-i18next';
import { useState, type Dispatch, type SetStateAction } from 'react';

import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    accounts: Account[];
    setShowClosed: Dispatch<SetStateAction<boolean>>;
}

export const AccountList = ({ accounts, setShowClosed }: Props) => {
    const { t } = useTranslation();
    const [currentNumber, setCurrentNumber] = useState<string>('');

    return (
        <div className='account-list__container'>
            <Checkbox onChange={() => setShowClosed(prev => !prev)}>
                <Text align='center'>{t('Отобразить неактивные счета')}</Text>
            </Checkbox>
            {accounts.length ? (
                <Columns number='3'>
                    {accounts.map(el => (
                        <AccountCard
                            key={el.number}
                            account={el}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        >
                            <ProductStatuses
                                isMaster={el.isMaster}
                                status={productStatuses[el.status]}
                                text={productStatusesToText[el.status]}
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
