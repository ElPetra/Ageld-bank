import { EXTEND, REQUISITES } from 'src/shared/model';
import { MoreInfoButton } from 'src/features/drop-down';

import {
    DEPOSIT_EXTENSION,
    DEPOSIT_REPLENISHING_INFO,
    DEPOSIT_INTEREST_CALCULATION_SCHEDULE
} from '../../../model';

import type { ProductStatus } from 'src/shared/model';

interface Props {
    status: ProductStatus;
}

const anchors: Record<string, string> = {
    [REQUISITES]: 'requisites',
    [DEPOSIT_INTEREST_CALCULATION_SCHEDULE]: 'interest-calculation-schedule',
    [DEPOSIT_REPLENISHING_INFO]: 'replenishing-info',
    [DEPOSIT_EXTENSION]: EXTEND
};

const depositsStatuses: Record<ProductStatus, string[]> = {
    active: [
        REQUISITES,
        DEPOSIT_INTEREST_CALCULATION_SCHEDULE,
        DEPOSIT_REPLENISHING_INFO,
        DEPOSIT_EXTENSION
    ],
    closed: [REQUISITES, DEPOSIT_EXTENSION],
    blocked: [REQUISITES, DEPOSIT_EXTENSION],
    autoprolongation: [],
    autoprolongationoff: []
};

export const DepositsMoreInfo = ({ status }: Props) => {
    const options = depositsStatuses[status].map(el => ({
        text: el,
        to: anchors[el] || '/'
    }));
    return <MoreInfoButton options={options} />;
};
