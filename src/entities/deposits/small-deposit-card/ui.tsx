import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, Card, Text } from 'src/shared/ui';

import {
    type DepositProduct,
    mockDepositPercentRate,
    RouteName
} from 'src/shared/model';

import './styles.scss';

interface Props {
    deposit: DepositProduct;
}

export const SmallDepositCard = ({ deposit }: Props) => {
    const { t } = useTranslation();
    return (
        <Card direction='column' padding='medium' gap='medium'>
            <div className='small-deposit-card__info'>
                <div className='small-deposit-card__info__text'>
                    <Text size='m' weight='medium'>
                        {deposit.name}
                    </Text>
                    <Text size='xs' color='tertiary'>
                        {t('До 30 сентября оформите ') + ' ' + deposit.name}
                    </Text>
                </div>
                <div className='small-deposit-card__info__detail'>
                    <div>
                        <Text weight='medium' size='s'>
                            {t('до')}
                        </Text>
                        <Text weight='medium' size='m'>
                            {mockDepositPercentRate + '%'}
                        </Text>
                    </div>
                    <Text color='tertiary' size='xs'>
                        {t('Процентная ставка')}
                    </Text>
                </div>
            </div>
            <Link to={RouteName.DEPOSIT_PRODUCT_PAGE + '/' + deposit.id}>
                <Button size='medium' width='max'>
                    {t('Показать больше')}
                </Button>
            </Link>
        </Card>
    );
};
