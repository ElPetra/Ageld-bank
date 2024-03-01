import { Link } from 'src/shared/ui';

export const MainPage = () => {
    return (
        <div>
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
