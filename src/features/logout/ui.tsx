import { useTranslation } from 'react-i18next';

import { useAuth } from 'src/entities/user';

export const Logout = () => {
    const { t } = useTranslation();
    const { signedOut } = useAuth();

    return <button onClick={() => signedOut()}>{t('Выйти')}</button>;
};
