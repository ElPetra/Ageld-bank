import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CREDITS, RouteName } from 'src/shared/model';
import { Container, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { CreditProductDetailsCard } from 'src/entities/credits';
import { BackButton } from 'src/features/multi-step-form';

import { CreditProductBenefits } from './credit-product-benefits';
import { CreditProductConditions } from './credit-product-conditions';

import type { CreditProductDetails } from 'src/shared/model';

import './styles.scss';

const credit: CreditProductDetails = {
    id: '1',
    name: 'Кредит Срочный',
    currency: 'rub',
    percentRate: 15.5,
    dayMax: 360,
    amountMin: 10000,
    amountMax: 3000000
};

export const CreditProductPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Container>
            <BackButton
                onTop={true}
                onClick={() => navigate(RouteName.MAIN_PAGE + '/' + CREDITS)}
            />
            {credit ? (
                <div className='credit-product'>
                    <div className='credit-product__card'>
                        <Text size='l' weight='bold'>
                            {'A-Geld ' + credit.name}
                        </Text>
                        <CreditProductDetailsCard credit={credit} />
                    </div>
                    <CreditProductBenefits />
                    <CreditProductConditions />
                </div>
            ) : (
                <MessageCard
                    title={t('Кредит не найден')}
                    buttonText={t('Перейти к списку кредитов')}
                    buttonLink={RouteName.MAIN_PAGE + '/' + CREDITS}
                />
            )}
        </Container>
    );
};
