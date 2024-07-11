import { useTranslation } from 'react-i18next';

import {
    DEPOSITS,
    DEPOSITS_PRODUCTS,
    mockDeposits,
    RouteName
} from 'src/shared/model';
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
                    buttonLink={
                        RouteName.MAIN_PAGE +
                        '/' +
                        DEPOSITS +
                        '/' +
                        DEPOSITS_PRODUCTS
                    }
                />
            )}
        </>
    );
};
