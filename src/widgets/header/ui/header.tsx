import { Layout } from 'src/pages/layout';
import './styles.scss';
import { Icon } from 'src/shared/ui';
import { NavItem } from 'src/widgets/header/ui/navItem.tsx';

export const Header = () => (
    <Layout.Header>
        <div className='header'>
            <Icon icon={'logo'} width={68} height={60} />
            <div className='header__nav nav'>
                <NavItem icon={'location'} width={32} height={32} linkTo='/'>
                    Банкоматы и отделения
                </NavItem>
                <NavItem
                    icon={'monetization'}
                    width={32}
                    height={32}
                    linkTo='/'
                >
                    Курсы валют
                </NavItem>
                <NavItem icon={'phone'} width={28} height={28} linkTo='/'>
                    Контакты
                </NavItem>
            </div>
        </div>
    </Layout.Header>
);
