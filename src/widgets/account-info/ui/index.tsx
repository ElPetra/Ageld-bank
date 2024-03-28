import { useParams } from 'react-router-dom';

import { accounts } from 'src/widgets/accounts/model';

import './styles.scss';

export const AccountInfo = () => {
    const { id } = useParams();
    const currentAccount = accounts.find(el => el.id === id);
    return <div>{currentAccount?.balance}</div>;
};
