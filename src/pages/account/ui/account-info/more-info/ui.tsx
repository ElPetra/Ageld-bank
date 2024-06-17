import { MoreInfoButton } from 'src/features/drop-down';
import { useTranslation } from 'react-i18next';

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
    status: ProductStatus;
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

const accountStatuses: {
    blocked: string[],
    active: string[],
    closed: string[]
} = {
    //Todo: уточнить, для чего здесь добавлена пролонгация в юнион
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

export const AccountsMoreInfo = ({ status }: Props) => {
    const { t } = useTranslation();
    // @ts-expect-error тип данных будет переписан
    const options = accountStatuses[status].map(el => ({
        text: t(el),
        to: anchors[el] || '/'
    }));
    return <MoreInfoButton options={options} />;
};
