import { useTranslation } from 'react-i18next';

import { DEPOSITS, mockDeposits, RouteName } from 'src/shared/model';
import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';

import { DepositInfo } from './deposit-info';

export const DepositPage = () => {
    const { t } = useTranslation();
    const deposit = mockDeposits[0];
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
