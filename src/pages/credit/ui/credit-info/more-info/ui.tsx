import i18n from 'src/shared/model/i18n';

import { MoreInfoButton } from 'src/features/drop-down';

const options = [
    {
        text: i18n.t('Реквизиты'),
        to: 'requisites'
    },
    {
        text: i18n.t('График платежей'),
        to: 'payment-schedule'
    }
];

export const CreditMoreInfo = () => {
    return <MoreInfoButton options={options} />;
};
