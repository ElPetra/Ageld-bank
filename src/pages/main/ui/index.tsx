import { Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';

export const MainPage = () => {
    return (
        <div>
            <Header />
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
