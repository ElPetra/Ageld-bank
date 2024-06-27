import { useTranslation } from 'react-i18next';

import { CREATE, mockDeposits, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { UniversalDepositsList } from 'src/features/universal-deposit-list';

export const CustomerDeposits = () => {
    const { t } = useTranslation();
    return (
        <>
            {mockDeposits.length ? (
                <UniversalDepositsList deposits={mockDeposits} />
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
