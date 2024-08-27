import { useTranslation } from 'react-i18next';

export const CreditProducts = () => {
    const { t } = useTranslation();
    return <div>{t('Кредитные продукты')}</div>;
};
