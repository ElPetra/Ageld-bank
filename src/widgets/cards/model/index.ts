import { isObj } from 'src/shared/model/typeGuards';

import type { CardProduct, CustomersCard } from 'src/shared/model';

export const CARDS_TITLE = 'Карты';
export function isCustomerCard(val: unknown): val is CustomersCard {
    if (!isObj(val)) {
        return false;
    }
    if (
        'nameProduct' in val &&
        typeof val.nameProduct === 'string' &&
        'image' in val &&
        typeof val.image === 'string' &&
        'level' in val &&
        typeof val.level === 'string' &&
        'typeCard' in val &&
        typeof val.typeCard === 'string' &&
        'accountNumber' in val &&
        typeof val.accountNumber === 'string' &&
        'expirationAt' in val &&
        typeof val.expirationAt === 'string' &&
        'statusName' in val &&
        typeof val.statusName === 'string' &&
        'paymentSystem' in val &&
        typeof val.paymentSystem === 'string'
    ) {
        return true;
    } else {
        return false;
    }
}
export function isCardProduct(val: unknown): val is CardProduct {
    if (!isObj(val)) {
        return false;
    }
    if (
        'nameProduct' in val &&
        typeof val.nameProduct === 'string' &&
        'imageUrl' in val &&
        typeof val.imageUrl === 'string' &&
        'level' in val &&
        typeof val.level === 'string' &&
        'typeCard' in val &&
        typeof val.typeCard === 'string' &&
        'cardProductId' in val &&
        typeof val.cardProductId === 'string' &&
        'paymentSystem' in val &&
        typeof val.paymentSystem === 'string'
    ) {
        return true;
    } else {
        return false;
    }
}
