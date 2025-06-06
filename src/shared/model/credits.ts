import type { Currency, Status } from 'src/shared/model';

type CreditStatus = 'active' | 'overdue' | 'closed';

type CreditApplicationStatus =
    | 'approved'
    | 'confirmed'
    | 'processing'
    | 'denied'
    | 'cancelled';

type CreditRateType = 'fixed';

type CreditMethodObtaining = 'cash' | 'card' | 'account';

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

export const creditApplicationStatusesToInfo: Record<
    CreditApplicationStatus,
    string
> = {
    approved:
        'Приглашаем Вас в офис банка с пакетом документов, указанным при зполнении анкеты.',
    confirmed:
        'Приглашаем Вас в офис банка с пакетом документов, указанным при зполнении анкеты.  ',
    processing: '',
    denied:
        'К сожалению, банк отказал Вам в предоставлении кредита.\n' +
        'Для получения подробной информации обратитесь в отделение банка.  ',
    cancelled: ''
};

export const creditRateTypeToText: Record<CreditRateType, string> = {
    fixed: 'Фиксированная'
};

export const creditMethodObtainingToText: Record<
    CreditMethodObtaining,
    string
> = {
    cash: 'Наличными',
    card: 'На карту',
    account: 'На счет продавца'
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
export interface CreditDetails {
    id: string;
    name: string;
    amount: number;
    remainPay?: number;
    currency: Currency;
    status: CreditStatus;
    percentRate: number;
    term: number;
    paymentDate?: string;
    payment?: number;
    debt?: number;
    repaymentDate?: string;
    contractNumber: string;
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

export interface CreditApplicationDetails {
    id: string;
    name: string;
    currency: Currency;
    status: CreditApplicationStatus;
    amount: number;
    applicationDate: string;
    number: string;
    percentRate: number;
    reviewPeriod: number;
    term: number;
    rateType: CreditRateType;
    methodObtaining: CreditMethodObtaining;
    isEarlyRepayment: boolean;
}
