import { useTranslation } from 'react-i18next';

import { CREATE, mockDeposits, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { CustomerDepositCard } from 'src/entities/deposits';

import './styles.scss';

export const CustomerDeposits = () => {
    const { t } = useTranslation();
    return (
        <>
            {mockDeposits.length ? (
                <div className='customer-deposits-list'>
                    {mockDeposits.map(el => (
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
