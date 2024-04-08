import { Icon, Text } from 'src/shared/ui';

import { ACCOUNTS_NOT_FOUND, CREATE_ACCOUNT } from 'src/widgets/accounts/model';

import './styles.scss';
import { Link } from 'react-router-dom';

export const AccountNotFound = () => {
    return (
        <div className='accounts__not-found'>
            <Text align='center'>{ACCOUNTS_NOT_FOUND}</Text>
            <Icon width={172} height={216} icon='question-lady' />
            <Link className='button medium secondary' to='/accounts/create'>
                {CREATE_ACCOUNT}
            </Link>
        </div>
    );
};
