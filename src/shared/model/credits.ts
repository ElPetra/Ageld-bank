import type { Currency, Status } from 'src/shared/model';

type CreditStatus = 'active' | 'overdue' | 'closed';

type CreditApplicationStatus =
    | 'approved'
    | 'confirmed'
    | 'processing'
    | 'denied'
    | 'cancelled';

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

export const creditApplicationStatusesToText: Record<
    CreditApplicationStatus,
    string
> = {
    approved: 'Одобрено',
    confirmed: 'Подтверждено',
    processing: 'В обработке',
    denied: 'Отказано',
    cancelled: 'Отменено'
};

export const creditApplicationStatuses: Record<
    CreditApplicationStatus,
    Status
> = {
    approved: 'success',
    confirmed: 'success',
    processing: 'warning',
    denied: 'closed',
    cancelled: 'closed'
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

export interface CreditProductDetails {
    id: string;
    name: string;
    currency: Currency;
    percentRate: number;
    dayMax: number;
    amountMin: number;
    amountMax: number;
}

export interface CreditProduct {
    id: string;
    name: string;
    currency: Currency;
    percentRate: number;
    amountMin: number;
    amountMax: number;
    dayMin: number;
    dayMax: number;
}

export interface CreditApplication {
    id: string;
    name: string;
    currency: Currency;
    status: CreditApplicationStatus;
    amount: number;
    applicationDate: string;
}
