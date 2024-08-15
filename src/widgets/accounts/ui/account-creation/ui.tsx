import { useTranslation } from 'react-i18next';

import { Columns, Text } from 'src/shared/ui';

import { AccountCreationCard } from './account-creation-card';

import './styles.scss';

export function AccountCreation() {
    const { t } = useTranslation();
    return (
        <div className='account-creation'>
            <Text tag='h2' size='m' weight='medium'>
                {t('Открыть счет')}
            </Text>
            <Columns number='3'>
                <AccountCreationCard title={t('Кредитный счет')} />
                <AccountCreationCard title={t('Дебетовый счет')} />
                <AccountCreationCard title={t('Депозитный счет')} />
            </Columns>
        </div>
    );
}
