import { Icon, Link } from 'src/shared/ui';

import './styles.scss';

export const Logo = () => (
    <div className='logo'>
        <Link to='/'>
            <Icon icon={'logo'} width={40} height={46} />
        </Link>
    </div>
);
