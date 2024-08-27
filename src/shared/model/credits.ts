import type { Currency, Status } from 'src/shared/model';

type CreditStatus = 'active' | 'overdue' | 'closed';

export const creditStatusesToText: Record<CreditStatus, string> = {
    active: 'Активный',
    overdue: 'Просроченный',
    closed: 'Закрытый'
};

export const creditStatuses: Record<CreditStatus, Status> = {
    active: 'success',
    overdue: 'warning',
    closed: 'closed'
};

export interface Credit {
    id: string;
    name: string;
    currency: Currency;
    status: CreditStatus;
    percentRate: number;
    term: number;
    paymentDate?: string;
    payment?: number;
    debt?: number;
    repaymentDate?: string;
}
