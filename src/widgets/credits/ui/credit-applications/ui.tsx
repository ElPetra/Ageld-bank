import { useTranslation } from 'react-i18next';

import { ProductStatuses } from 'src/entities/product';
import { CreditApplicationsCard } from 'src/entities/credits';
import { MessageCard } from 'src/entities/message';
import {
    CREDITS_PRODUCTS,
    RouteName,
    creditApplicationStatusesToText,
    creditApplicationStatuses
} from 'src/shared/model';

import type { CreditApplication } from 'src/shared/model';

import './styles.scss';

const mockCreditApplication: CreditApplication[] = [
    {
        id: '1',
        name: 'Наличными',
        currency: 'rub',
        status: 'processing',
        amount: 5750,
        applicationDate: '2024-09-01 00:00:00+00'
    },
    {
        id: '2',
        name: 'Срочный',
        currency: 'rub',
        status: 'denied',
        amount: 5000,
        applicationDate: '2024-08-17 00:00:00+00'
    },
    {
        id: '3',
        name: 'Easy',
        currency: 'rub',
        status: 'approved',
        amount: 8989,
        applicationDate: '2024-08-01 00:00:00+00'
    },
    {
        id: '4',
        name: 'Car',
        currency: 'rub',
        status: 'cancelled',
        amount: 1000000,
        applicationDate: '2024-08-01 00:00:00+00'
    },
    {
        id: '5',
        name: 'Моя квартира',
        currency: 'rub',
        status: 'confirmed',
        amount: 6000000,
        applicationDate: '2024-08-01 00:00:00+00'
    }
];

export const CreditApplications = () => {
    const { t } = useTranslation();
    return mockCreditApplication.length ? (
        <div className='credit-applications'>
            {mockCreditApplication.map(el => (
                <CreditApplicationsCard key={el.id} credit={el}>
                    <ProductStatuses
                        isMaster={false}
                        status={creditApplicationStatuses[el.status]}
                        text={creditApplicationStatusesToText[el.status]}
                    />
                </CreditApplicationsCard>
            ))}
        </div>
    ) : (
        <MessageCard
            title={t('На данный момент \n у вас нет заявок на кредит')}
            buttonText={t('Оформить кредит')}
            buttonLink={RouteName.MAIN_PAGE + '/' + CREDITS_PRODUCTS}
        />
    );
};
