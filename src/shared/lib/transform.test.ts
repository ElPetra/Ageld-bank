import {
    transformAccountDetails,
    transformAccounts,
    transformCardDetails,
    transformCardProductDetails,
    transformCardProducts,
    transformCards
} from './trasnform';

import type {
    Account,
    AccountDetails,
    AccountDetailsResponse,
    AccountResponse,
    CardDetails,
    CardDetailsResponse,
    CardProduct,
    CardProductDetails,
    CardProductDetailsResponse,
    CardProductResponse,
    CustomerCard,
    CustomerCardResponse
} from '../model';

//accounts

const accountsResponseExample: AccountResponse = {
    accountNumber: 'example123',
    type: 'credit',
    statusName: 'active',
    accountBalance: 12345,
    currencyName: 'rub',
    masterAccount: true,
    nameAccount: 'example'
};

const accountExample: Account = {
    number: 'example123',
    type: 'credit',
    balance: 12345,
    status: 'active',
    currency: 'rub',
    isMaster: true,
    name: 'example'
};

const arrayOfAccountResponseExample = Array.from(
    { length: 2 },
    () => accountsResponseExample
);
const arrayOfAccountExample = Array.from({ length: 2 }, () => accountExample);

//account details

const accountDetailsResponseExample: AccountDetailsResponse = {
    accountNumber: 'example123',
    nameAccount: 'example',
    masterAccount: true,
    type: 'credit',
    currencyName: 'rub',
    statusName: 'active',
    accountBalance: 12345,
    createdAt: 'example',
    closedAt: 'example',
    blockReason: 'example',
    blockComment: null
};

const accountDetailsExample: AccountDetails = {
    number: 'example123',
    name: 'example',
    isMaster: true,
    type: 'credit',
    currency: 'rub',
    status: 'active',
    balance: 12345,
    createdAt: 'example',
    closedAt: 'example',
    blockReason: 'example',
    blockComment: ''
};

//cards

const customerCardResponseExample: CustomerCardResponse = {
    cardId: 'example123',
    accountNumber: 'example123',
    expirationAt: 'example',
    image: 'example',
    level: 'CLASSIC',
    nameProduct: 'example',
    paymentSystem: 'МИР',
    statusName: 'ACTIVE',
    typeCard: 'CREDIT'
};

const customerCardExample: CustomerCard = {
    id: 'example123',
    number: 'example123',
    expirationAt: 'example',
    image: 'example',
    level: 'CLASSIC',
    name: 'example',
    paymentSystem: 'МИР',
    status: 'active',
    type: 'CREDIT'
};

const arrayOfCustomerCardResponseExample = Array.from(
    { length: 2 },
    () => customerCardResponseExample
);
const arrayOfCustomerCardExample = Array.from(
    { length: 2 },
    () => customerCardExample
);

//card details

const cardDetailsResponseExample: CardDetailsResponse = {
    customerId: 12345,
    cardNumber: 'example123',
    balance: 12345,
    statusName: 'ACTIVE',
    expirationAt: 'example',
    nameProduct: 'example',
    typeCard: 'CREDIT',
    isVirtual: true,
    level: 'CLASSIC',
    paymentSystem: 'МИР',
    image: 'example'
};

const cardDetailsExample: CardDetails = {
    number: 'example123',
    balance: 12345,
    status: 'active',
    expirationAt: 'example',
    name: 'example',
    type: 'CREDIT',
    isVirtual: true,
    level: 'CLASSIC',
    paymentSystem: 'МИР',
    image: 'example'
};

//card products

const cardProductResponseExample: CardProductResponse = {
    cardProductId: 'example123',
    nameProduct: 'example',
    imageUrl: 'example',
    paymentSystem: 'VISA',
    typeCard: 'CREDIT',
    level: 'CLASSIC'
};

const cardProduct: CardProduct = {
    id: 'example123',
    name: 'example',
    image: 'example',
    paymentSystem: 'VISA',
    type: 'CREDIT',
    level: 'CLASSIC'
};

const arrayOfCardProductResponseExample = Array.from(
    { length: 2 },
    () => cardProductResponseExample
);
const arrayOfCardProductExample = Array.from({ length: 2 }, () => cardProduct);

//card product details

const cardProductDetailsResponseExample: CardProductDetailsResponse = {
    nameProduct: 'example',
    image: 'example',
    paymentSystem: 'VISA',
    typeCard: 'CREDIT',
    level: 'CLASSIC',
    isVirtual: true,
    feeUse: 12345,
    withdrawLimitDay: 12345,
    withdrawLimitMonth: 12345,
    transactionLimitDay: 12345,
    transactionLimitMonth: 12345,
    payLimitDay: 12345,
    payLimitMonth: 12345,
    overWithdrawDay: 12345,
    overWithdrawMonth: 12345,
    overTransactionDay: 12345,
    overTransactionMonth: 12345,
    overPayDay: 12345,
    overPayMonth: 12345,
    conditionWithdraw: 12345,
    conditionPartnerWithdraw: 12345,
    conditionWorldWithdraw: 12345,
    conditionTransaction: 12345,
    conditionPay: 12345
};

const cardProductDetailsExample: CardProductDetails = {
    name: 'example',
    image: 'example',
    paymentSystem: 'VISA',
    type: 'CREDIT',
    level: 'CLASSIC',
    isVirtual: true,
    feeUse: 12345,
    limits: [
        {
            key: 'withdrawLimitDay',
            value: 12345
        },
        {
            key: 'withdrawLimitMonth',
            value: 12345
        },
        {
            key: 'transactionLimitDay',
            value: 12345
        },
        {
            key: 'transactionLimitMonth',
            value: 12345
        },
        {
            key: 'payLimitDay',
            value: 12345
        },
        {
            key: 'payLimitMonth',
            value: 12345
        },
        {
            key: 'overWithdrawDay',
            value: 12345
        },
        {
            key: 'overWithdrawMonth',
            value: 12345
        },
        {
            key: 'overTransactionDay',
            value: 12345
        },
        {
            key: 'overTransactionMonth',
            value: 12345
        },
        {
            key: 'overPayDay',
            value: 12345
        },
        {
            key: 'overPayMonth',
            value: 12345
        }
    ],
    conditions: [
        {
            key: 'conditionWithdraw',
            value: 12345
        },
        {
            key: 'conditionPartnerWithdraw',
            value: 12345
        },
        {
            key: 'conditionWorldWithdraw',
            value: 12345
        },
        {
            key: 'conditionTransaction',
            value: 12345
        },
        {
            key: 'conditionPay',
            value: 12345
        }
    ]
};

describe('transform accounts response', () => {
    it('should return Account array for AccountResponse array', () => {
        expect(transformAccounts(arrayOfAccountResponseExample)).toEqual(
            arrayOfAccountExample
        );
    });
    it('should not return AccountResponse array for AccountResponse array', () => {
        expect(transformAccounts(arrayOfAccountResponseExample)).not.toEqual(
            arrayOfAccountResponseExample
        );
    });
});

describe('transform account details response', () => {
    it('should return AccountDetails for AccountDetailsResponse', () => {
        expect(transformAccountDetails(accountDetailsResponseExample)).toEqual(
            accountDetailsExample
        );
    });
    it('should not return AccountDetailsResponse for AccountDetailsResponse', () => {
        expect(
            transformAccountDetails(accountDetailsResponseExample)
        ).not.toEqual(accountDetailsResponseExample);
    });
});

describe('transform cards response', () => {
    it('should return CustomerCard array for CustomerCardResponse array', () => {
        expect(transformCards(arrayOfCustomerCardResponseExample)).toEqual(
            arrayOfCustomerCardExample
        );
    });
    it('should not return CustomerCardResponse array for CustomerCardResponse array', () => {
        expect(transformCards(arrayOfCustomerCardResponseExample)).not.toEqual(
            arrayOfCustomerCardResponseExample
        );
    });
});

describe('transform card details response', () => {
    it('should return CardDetails for CardDetailsResponse', () => {
        expect(transformCardDetails(cardDetailsResponseExample)).toEqual(
            cardDetailsExample
        );
    });
    it('should not return CardDetailsResponse for CardDetailsResponse', () => {
        expect(transformCardDetails(cardDetailsResponseExample)).not.toEqual(
            cardDetailsResponseExample
        );
    });
});

describe('transform card products response', () => {
    it('should return CardProduct array for CardProductResponse array', () => {
        expect(
            transformCardProducts(arrayOfCardProductResponseExample)
        ).toEqual(arrayOfCardProductExample);
    });
    it('should not return CardProductResponse array for CardProductResponse array', () => {
        expect(
            transformCardProducts(arrayOfCardProductResponseExample)
        ).not.toEqual(arrayOfCardProductResponseExample);
    });
});

describe('transform card product details response', () => {
    it('should return CardProductDetails for CardProductDetailsResponse', () => {
        expect(
            transformCardProductDetails(cardProductDetailsResponseExample)
        ).toEqual(cardProductDetailsExample);
    });
    it('should not return CardProductDetailsResponse for CardProductDetailsResponse', () => {
        expect(
            transformCardProductDetails(cardProductDetailsResponseExample)
        ).not.toEqual(cardProductDetailsResponseExample);
    });
});
