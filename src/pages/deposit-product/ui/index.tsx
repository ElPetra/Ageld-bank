import { useParams } from 'react-router-dom';
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

export const DepositProductPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { data: deposit } = useGetDepositProductQuery({
        id: id || ''
    });

    return (
        <Container>
            <BackButton />
            {deposit ? (
                <div className='deposit-product'>
                    <Text size='l' weight='bold'>
                        {'A-Geld ' + deposit.name}
                    </Text>
                    <DepositProductDetailsCard deposit={deposit} />
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
