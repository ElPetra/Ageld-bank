import type { SvgIconName } from 'src/shared/ui';

export const conditionsMatcher = {
    conditionWithdraw: 'Комиссия за снятие наличных в банкомате другого банка',
    conditionPartnerWithdraw:
        'Комиссия за снятие наличных в банкомате банка-партнёра',
    conditionWorldWithdraw:
        'Комиссия за снятие наличных в другой валюте в банкоматах банков за рубежом',
    conditionTransaction: 'Комиссия за переводы при исчерпании лимита',
    conditionPay: 'Комиссия за оплату при исчерпании лимита'
};

export const limitsMatcher = {
    withdrawLimitDay: 'Лимит на снятие денег в день',
    withdrawLimitMonth: 'Лимит на снятие денег в месяц',
    transactionLimitDay: 'Лимит на сумму переводов в день',
    transactionLimitMonth: 'Лимит на сумму переводов в месяц',
    payLimitDay: 'Лимит на безналичные платежи в день',
    payLimitMonth: 'Лимит на безналичные платежи в месяц',
    overWithdrawDay: 'Лимит на снятие денег в день без комиссии',
    overWithdrawMonth: 'Лимит на снятие денег в месяц без комиссии',
    overTransactionDay: 'Лимит на сумму переводов в день без комиссии',
    overTransactionMonth: 'Лимит на сумму переводов в месяц без комиссии',
    overPayDay: 'Лимит на безналичные платежи в день без комиссии',
    overPayMonth: 'Лимит на безналичные платежи в месяц без комиссии'
};

export interface InfoLink {
    id: number;
    text: string;
    icon: SvgIconName;
}

export const cardInfo: InfoLink[] = [
    {
        id: 1,
        text: 'Реквизиты карты',
        icon: 'bill-details'
    },
    {
        id: 2,
        text: 'Тарифы и комиссии',
        icon: 'briefcase-icon'
    },
    {
        id: 3,
        text: 'Лимиты',
        icon: 'settings-icon'
    },
    {
        id: 4,
        text: 'История операций',
        icon: 'bill-details'
    },
    {
        id: 5,
        text: 'Выписка',
        icon: 'bill-details'
    }
];
export const cardActions: InfoLink[] = [
    {
        id: 1,
        text: 'Пополнить',
        icon: 'add-to-card'
    },
    {
        id: 2,
        text: 'Изменить пин-код',
        icon: 'password-icon'
    },
    {
        id: 3,
        text: 'Запретить операции',
        icon: 'forbid-operations'
    },
    {
        id: 4,
        text: 'Заблокировать карту',
        icon: 'lock-icon'
    }
];
