import { useAuth } from 'src/entities/user';

export const Logout = () => {
    const { signedOut } = useAuth();
    return <button onClick={() => signedOut()}>Выйти</button>;
};
