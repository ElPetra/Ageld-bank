import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';

export const NotificationHistoryPage = () => {
    const { t } = useTranslation();
    return <Container>{t('История уведомлений')}</Container>;
};
