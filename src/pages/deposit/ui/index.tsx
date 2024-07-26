import { useTranslation } from 'react-i18next';

import { type DepositDetails, DEPOSITS, RouteName } from 'src/shared/model';
import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';

import { DepositInfo } from './deposit-info';

const deposit: DepositDetails = {
    name: 'Бобр',
    timeLimited: false,
    currency: 'rub',
    revocable: false,
    capitalization: 0,
    withdrawal: 2,
    status: true,
    withAutoProlongation: false,
    initialAmount: 8000,
    balance: 10000,
    percentBalance: 2000,
    startDate: '2025-01-01 17:34:25',
    endDate: '2025-01-02 17:34:25',
    isAutoProlongation: true,
    percentRate: 12.5,
    account: '12345678901234567000',
    mAccountId: '12345678901234567000',
    pAccountId: '12345678901234567000'
};

export const DepositPage = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <BackButton />
            {deposit ? (
                <Menu
                    variant='secondary'
                    elements={[
                        {
                            id: 1,
                            name: t('Мои депозиты'),
                            component: <DepositInfo deposit={deposit} />
                        }
                    ]}
                />
            ) : (
                <MessageCard
                    title={t('Депозит не найден')}
                    buttonText={t('Перейти к списку депозитов')}
                    buttonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
                />
            )}
        </Container>
    );
};
