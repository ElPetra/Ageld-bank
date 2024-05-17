import type { PaymentSystem, ProductStatus } from 'src/shared/model';
import type { SvgIconName } from 'src/shared/ui';

export const getIconName = (payment: PaymentSystem): SvgIconName => {
    switch (payment) {
        case 'VISA':
            return 'visa-icon';
        case 'МИР':
            return 'mir-icon';
    }
};

export const getStatusName = (status: ProductStatus): string => {
    switch (status) {
        case 'active':
            return 'Активная';
        case 'blocked':
            return 'Заблокированная';
        case 'closed':
            return 'Закрытая';
    }
};
