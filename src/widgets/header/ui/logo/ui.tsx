import { Icon, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const Logo = () => (
    <div className='logo'>
        <Link to={RouteName.MAIN_PAGE}>
            <Icon icon='logo-icon' width={40} />
        </Link>
    </div>
);
