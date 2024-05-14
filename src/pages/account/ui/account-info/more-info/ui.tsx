import { MoreInfo } from 'src/features/drop-down';

import {
    ACCOUNT_STATEMENT,
    APPLICATION_STATUS,
    BLOCK_ACCOUNT,
    CLOSE_ACCOUNT,
    MAKE_ACCOUNT_MAIN,
    REQUISITES,
    UNLOCK_ACCOUNT
} from '../../../model';

import type { ProductStatus } from 'src/shared/model';

interface Props {
    accountStatus: ProductStatus;
}

const anchors: Record<string, string> = {
    [REQUISITES]: 'requisites',
    [ACCOUNT_STATEMENT]: 'account_statement',
    [MAKE_ACCOUNT_MAIN]: 'make_main',
    [CLOSE_ACCOUNT]: 'close',
    [UNLOCK_ACCOUNT]: 'unlock',
    [APPLICATION_STATUS]: 'application_status',
    [BLOCK_ACCOUNT]: 'block'
};

const accountStatuses: Record<ProductStatus, string[]> = {
    active: [
        REQUISITES,
        ACCOUNT_STATEMENT,
        MAKE_ACCOUNT_MAIN,
        CLOSE_ACCOUNT,
        BLOCK_ACCOUNT
    ],
    closed: [REQUISITES, ACCOUNT_STATEMENT],
    blocked: [REQUISITES, ACCOUNT_STATEMENT, UNLOCK_ACCOUNT]
};

export const AccountsMoreInfo = ({ accountStatus }: Props) => {
    const options = accountStatuses[accountStatus].map(el => ({
        text: el,
        to: anchors[el] || '/'
    }));
    return <MoreInfo options={options} />;
};
