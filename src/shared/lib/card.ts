import type { PaymentSystem } from 'src/shared/model';

import type { SvgIconName } from 'src/shared/ui';

export const getIconName = (payment: PaymentSystem): SvgIconName => {
    switch (payment) {
        case 'Visa':
            return 'visa';
        case 'MIR':
            return 'mir';
        case 'MasterCard':
            return 'masterCard';
    }
};
