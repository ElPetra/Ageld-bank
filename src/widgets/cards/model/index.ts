import { isObj } from 'src/shared/lib';

import type { CardProduct, CustomersCard } from 'src/shared/model';

export function isCustomerCard(val: unknown): val is CustomersCard {
    if (!isObj(val)) {
        return false;
    }
    return (
        'number' in val &&
        typeof val.number === 'string' &&
        'expirationAt' in val &&
        typeof val.expirationAt === 'string' &&
        'image' in val &&
        typeof val.image === 'string' &&
        'level' in val &&
        typeof val.level === 'string' &&
        'name' in val &&
        typeof val.name === 'string' &&
        'paymentSystem' in val &&
        typeof val.paymentSystem === 'string' &&
        'status' in val &&
        typeof val.status === 'string' &&
        'type' in val &&
        typeof val.type === 'string'
    );
}
export function isCardProduct(val: unknown): val is CardProduct {
    if (!isObj(val)) {
        return false;
    }
    return (
        'id' in val &&
        typeof val.id === 'string' &&
        'name' in val &&
        typeof val.name === 'string' &&
        'image' in val &&
        typeof val.image === 'string' &&
        'paymentSystem' in val &&
        typeof val.paymentSystem === 'string' &&
        'type' in val &&
        typeof val.type === 'string' &&
        'level' in val &&
        typeof val.level === 'string'
    );
}
