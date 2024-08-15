import type {
    CardDetails,
    CardProduct,
    CardProductDetails,
    CustomerCard
} from 'src/shared/model';

export function isCustomerCard(
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails
): card is CustomerCard {
    return 'status' in card && 'id' in card;
}

export function isCardDetails(
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails
): card is CardDetails {
    return 'status' in card && !('id' in card);
}

export function isCardProduct(
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails
): card is CardProduct {
    return !('status' in card) && 'id' in card;
}

export function isCardProductDetails(
    card: CustomerCard | CardProduct | CardDetails | CardProductDetails
): card is CardProductDetails {
    return !('status' in card) && !('id' in card);
}

export function getCardNumber(number: string): string {
    return number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
}
