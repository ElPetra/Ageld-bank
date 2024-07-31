import { useTranslation } from 'react-i18next';

import { DEPOSITS, RouteName } from 'src/shared/model';
import { Container, Text } from 'src/shared/ui';
import { useGetDepositProductQuery } from 'src/shared/api';
import { MessageCard } from 'src/entities/message';
import { DepositProductDetailsCard } from 'src/entities/deposits';
import { BackButton } from 'src/features/multi-step-form';

import { DepositProductBenefits } from './deposit-product-benefits';
import { DepositProductOffers } from './deposit-product-offers';

import './styles.scss';

// const deposit: DepositProductDetails = {
//     id: '123e4567-e89b-12d3-a456-426614174005',
//     name: 'Депозит A-Geld Базовый',
//     currency: 'rub',
//     monthsMin: 1,
//     dayMax: 9,
//     amountMin: 1000,
//     amountMax: 100000,
//     capitalization: true,
//     replenishment: true,
//     withdrawal: 2,
//     revocable: true,
//     percentRate: 17.7
// };

export const DepositProductPage = () => {
    const { t } = useTranslation();
    const { data: DepositDetails } = useGetDepositProductQuery({
        id: 'a5562a77-a301-4719-a29b-18e8b286c718' // данные пока не приходят с api
    });

    return (
        <Container>
            <BackButton />
            {DepositDetails ? (
                <div className='deposit-product'>
                    <Text size='l' weight='bold'>
                        {DepositDetails.name}
                    </Text>
                    <DepositProductDetailsCard deposit={DepositDetails} />
                    <DepositProductBenefits />
                    <DepositProductOffers />
                </div>
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
