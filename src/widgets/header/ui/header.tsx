import { Layout } from 'src/pages/layout';
import { Icon, Link } from 'src/shared/ui';
import './styles.scss';

export const Header = () => (
    <Layout.Header>
        <div className='header'>
            <Link to='/'>
                <Icon icon={'logo'} width={40} height={46} />
            </Link>
            <div className='header__nav'>
                <Link to='/' size='medium' color='none'>
                    О банке
                </Link>
                <Link to='/' size='medium' color='none'>
                    Точки пополнения и Банкоматы
                </Link>
                <Link to='/' size='medium' color='none'>
                    Курсы валют
                </Link>
                <Link to='/' size='medium' color='none'>
                    Контакты
                </Link>
                <Link to='/' size='medium' color='none'>
                    Помощь
                </Link>
                <Link to='/' size='medium' color='none'>
                    Новости
                </Link>
                <Link to='/' size='medium' color='none'>
                    Работа
                </Link>
            </div>
        </div>
    </Layout.Header>
);
