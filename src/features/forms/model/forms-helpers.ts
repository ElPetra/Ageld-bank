import { useTranslation } from 'react-i18next';

export const useCitizenshipOptions = () => {
    const { t } = useTranslation();

    return [
        { value: 'RUS', label: t('Российская Федерация') },
        { value: 'BEL', label: t('Беларусь') },
        { value: 'UKR', label: t('Украина') },
        { value: 'ARM', label: t('Армения') }
    ];
};
