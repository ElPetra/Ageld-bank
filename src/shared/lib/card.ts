import type { PaymentSystem } from 'src/shared/model';

import type { SvgIconName } from 'src/shared/ui';

export const getIconName = (payment: PaymentSystem): SvgIconName => {
    switch (payment) {
        case 'VISA':
            return 'visa-icon';
        case 'МИР':
            return 'mir-icon';
    }
};
