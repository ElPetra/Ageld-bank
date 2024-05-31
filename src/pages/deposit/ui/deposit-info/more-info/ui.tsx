import i18n from 'src/shared/model/i18n';

import { EXTEND } from 'src/shared/model';
import { MoreInfoButton } from 'src/features/drop-down';

const options = [
    {
        text: i18n.t('Реквизиты'),
        to: 'requisites'
    },
    {
        text: i18n.t('График начисления процентов'),
        to: 'interest-calculation-schedule'
    },
    {
        text: i18n.t('Информация о пополнении депозита'),
        to: 'replenishing-info'
    },
    {
        text: i18n.t('Пролонгация депозита'),
        to: EXTEND
    }
];

export const DepositsMoreInfo = () => {
    return <MoreInfoButton options={options} />;
};
