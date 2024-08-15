import type { SvgIconName } from 'src/shared/ui';

export const conditionsMatcher = {
    client: 'Комиссия за снятие наличных для клиента',
    partnerClient: 'Комиссия за снятие наличных для партнёра клиента',
    localCustomer: 'Комиссия за снятие наличных для местного клиента',
    internationalCustomer:
        'Комиссия за снятие наличных для международного клиента',
    transferClient: 'Комиссия за переводы для клиента',
    transferPartnerClient: 'Комиссия за переводы для партнёра клиента',
    transferNonPartnerClient: 'Комиссия за переводы для непартнёра клиента',
    internationalTransfer: 'Комиссия за международный перевод'
};

export const limitsMatcher = {
    amountDay: 'Лимит на сумму в день',
    amountOperation: 'Лимит на сумму одной операции',
    withdrawalOperation: 'Лимит на снятие одной операции'
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
        icon: 'action-bill-details'
    },
    {
        id: 2,
        text: 'Тарифы и комиссии',
        icon: 'action-briefcase'
    },
    {
        id: 3,
        text: 'Лимиты',
        icon: 'action-settings'
    },
    {
        id: 4,
        text: 'История операций',
        icon: 'action-bill-details'
    },
    {
        id: 5,
        text: 'Выписка',
        icon: 'action-bill-details'
    }
];

export const cardActions: InfoLink[] = [
    {
        id: 1,
        text: 'Пополнить',
        icon: 'action-add-card'
    },
    {
        id: 2,
        text: 'Изменить пин-код',
        icon: 'action-pin-code'
    },
    {
        id: 3,
        text: 'Запретить операции',
        icon: 'action-close'
    },
    {
        id: 4,
        text: 'Заблокировать карту',
        icon: 'action-lock'
    }
];
