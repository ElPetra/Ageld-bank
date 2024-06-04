import i18n from 'src/shared/model/i18n';

import type { SvgIconName } from 'src/shared/ui';

export const conditionsMatcher = {
    conditionWithdraw: i18n.t(
        'Комиссия за снятие наличных в банкомате другого банка'
    ),
    conditionPartnerWithdraw: i18n.t(
        'Комиссия за снятие наличных в банкомате банка-партнёра'
    ),
    conditionWorldWithdraw: i18n.t(
        'Комиссия за снятие наличных в другой валюте в банкоматах банков за рубежом'
    ),
    conditionTransaction: i18n.t('Комиссия за переводы при исчерпании лимита'),
    conditionPay: i18n.t('Комиссия за оплату при исчерпании лимита')
};

export const limitsMatcher = {
    withdrawLimitDay: i18n.t('Лимит на снятие денег в день'),
    withdrawLimitMonth: i18n.t('Лимит на снятие денег в месяц'),
    transactionLimitDay: i18n.t('Лимит на сумму переводов в день'),
    transactionLimitMonth: i18n.t('Лимит на сумму переводов в месяц'),
    payLimitDay: i18n.t('Лимит на безналичные платежи в день'),
    payLimitMonth: i18n.t('Лимит на безналичные платежи в месяц'),
    overWithdrawDay: i18n.t('Лимит на снятие денег в день без комиссии'),
    overWithdrawMonth: i18n.t('Лимит на снятие денег в месяц без комиссии'),
    overTransactionDay: i18n.t('Лимит на сумму переводов в день без комиссии'),
    overTransactionMonth: i18n.t(
        'Лимит на сумму переводов в месяц без комиссии'
    ),
    overPayDay: i18n.t('Лимит на безналичные платежи в день без комиссии'),
    overPayMonth: i18n.t('Лимит на безналичные платежи в месяц без комиссии')
};

export interface InfoLink {
    id: number;
    text: string;
    icon: SvgIconName;
}

export const cardInfo: InfoLink[] = [
    {
        id: 1,
        text: i18n.t('Реквизиты карты'),
        icon: 'action-bill-details'
    },
    {
        id: 2,
        text: i18n.t('Тарифы и комиссии'),
        icon: 'action-briefcase'
    },
    {
        id: 3,
        text: i18n.t('Лимиты'),
        icon: 'action-settings'
    },
    {
        id: 4,
        text: i18n.t('История операций'),
        icon: 'action-bill-details'
    },
    {
        id: 5,
        text: i18n.t('Выписка'),
        icon: 'action-bill-details'
    }
];

export const cardActions: InfoLink[] = [
    {
        id: 1,
        text: i18n.t('Пополнить'),
        icon: 'action-add-card'
    },
    {
        id: 2,
        text: i18n.t('Изменить пин-код'),
        icon: 'action-pin-code'
    },
    {
        id: 3,
        text: i18n.t('Запретить операции'),
        icon: 'action-close'
    },
    {
        id: 4,
        text: i18n.t('Заблокировать карту'),
        icon: 'action-lock'
    }
];
