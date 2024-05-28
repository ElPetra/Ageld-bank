import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';
import { Menu } from 'src/features/menu';
import { BackButton } from 'src/features/multi-step-form';
import { DepositProducts } from 'src/widgets/deposits';

import { DepositInfo } from './deposit-info';

export const DepositPage = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <BackButton />

            <Menu
                variant='secondary'
                elements={[
                    {
                        id: 1,
                        name: t('Мои депозиты'),
                        component: <DepositInfo />
                    },
                    {
                        id: 2,
                        name: t('Депозиты A-geld'),
                        component: <DepositProducts />
                    }
                ]}
            />
        </Container>
    );
};
