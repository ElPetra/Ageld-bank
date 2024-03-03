import { Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';

export const AuthPage = () => {
    return (
        <div>
            <Header />
            <Link to='/'>Main</Link>
            <br />
            Регистрация
        </div>
    );
};
