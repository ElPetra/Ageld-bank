import { useAuth } from 'src/entities/user';
import i18n from 'src/shared/model/i18n';

export const Logout = () => {
    const { signedOut } = useAuth();
    return <button onClick={() => signedOut()}>{i18n.t('Выйти')}</button>;
};
