import { Button, Icon, Text } from 'src/shared/ui';

import { ACCOUNTS_NOT_FOUND, CREATE_ACCOUNT } from '../../../model';

import './styles.scss';

export const AccountNotFound = () => {
    return (
        <div className='accounts__not-found'>
            <Text align='center'>{ACCOUNTS_NOT_FOUND}</Text>
            <Icon width={172} height={216} icon='question-lady' />
            <Button variant='secondary'>{CREATE_ACCOUNT}</Button>
        </div>
    );
};
