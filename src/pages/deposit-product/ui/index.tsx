import { useTranslation } from 'react-i18next';

import { DEPOSITS, RouteName } from 'src/shared/model';
import { Container } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { BackButton } from 'src/features/multi-step-form';

export const DepositProductPage = () => {
    const { t } = useTranslation();
    const deposit = '';
    return (
        <Container>
            <BackButton />
            {deposit ? (
                <div>deposit</div>
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
