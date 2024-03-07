import { Icon, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Logo = () => (
    <div className='logo'>
        <Link to={RouteName.MAIN_PAGE}>
            <Icon icon={'logo'} width={40} height={46} />
        </Link>
    </div>
);
