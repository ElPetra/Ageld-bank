import { Link, useLocation } from 'react-router-dom';

import { Icon, Text } from 'src/shared/ui';

import { Menu } from 'src/features/menu';

import { AccountOperations } from 'src/widgets/account-operations';

import { ACCOUNT_INFO, OPERATIONS_HISTORY } from '../model/constants';

import { AccountInfoContent } from './infoContent/AccountInfoContent';

import './styles.scss';

export const AccountInfo = () => {
    const { state } = useLocation();
    return (
        <>
            <Link className='back_link' to={state.from}>
                <Icon icon='arrow' />
                <Text>Назад</Text>
            </Link>
            <Menu
                variant={'secondary'}
                elements={[
                    {
                        id: 1,
                        name: ACCOUNT_INFO,
                        component: <AccountInfoContent />
                    },
                    {
                        id: 2,
                        name: OPERATIONS_HISTORY,
                        component: <AccountOperations />
                    }
                ]}
            ></Menu>
        </>
    );
};
