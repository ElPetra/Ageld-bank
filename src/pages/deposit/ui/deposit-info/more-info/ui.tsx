import { useTranslation } from 'react-i18next';

import { EXTEND } from 'src/shared/model';
import { MoreInfoButton } from 'src/features/drop-down';

export const DepositsMoreInfo = () => {
    const { t } = useTranslation();
    const options = [
        {
            text: t('Реквизиты'),
            to: 'requisites'
        },
        {
            text: t('График начисления процентов'),
            to: 'interest-calculation-schedule'
        },
        {
            text: t('Информация о пополнении депозита'),
            to: 'replenishing-info'
        },
        {
            text: t('Пролонгация депозита'),
            to: EXTEND
        }
    ];
    return <MoreInfoButton options={options} />;
};
