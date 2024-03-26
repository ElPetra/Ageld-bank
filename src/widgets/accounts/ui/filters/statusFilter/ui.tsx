import { Text } from 'src/shared/ui';

import {
    BLOCKED_ACCOUNTS,
    CLOSED_ACCOUNTS,
    OPENED_ACCOUNTS,
    OPEN_ACCOUNT_REQUEST
} from 'src/widgets/accounts/model/constants';

interface AccountStatus {
    text: string;
}

interface Props {
    currentFilter: string;
    onClick: (el: string) => void;
}

const statuses: AccountStatus[] = [
    { text: OPENED_ACCOUNTS },
    { text: OPEN_ACCOUNT_REQUEST },
    { text: CLOSED_ACCOUNTS },
    { text: BLOCKED_ACCOUNTS }
];

const statusesMatcher: Record<string, string> = {
    [OPENED_ACCOUNTS]: 'active',
    [OPEN_ACCOUNT_REQUEST]: 'requested',
    [CLOSED_ACCOUNTS]: 'closed',
    [BLOCKED_ACCOUNTS]: 'blocked'
};

export const StatusFilter = ({ currentFilter, onClick }: Props) => {
    return (
        <ul className='accounts-filter'>
            {statuses.map((el, i) => (
                <li
                    onClick={() => onClick(statusesMatcher[el.text])}
                    key={i}
                    className={`accounts-filter_tab ${currentFilter === statusesMatcher[el.text] ? 'active' : ''}`}
                >
                    <Text weight='medium'>{el.text}</Text>
                </li>
            ))}
        </ul>
    );
};
