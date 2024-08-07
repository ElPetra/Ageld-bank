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
    active: true,
    cardId: 'example123',
    lastFourDigits: 1234,
    expires: 'example',
    image: 'example',
    productName: 'example',
    cardStatus: 1,
    balance: 12345,
    isVirtual: true,
    currencyCode: 'RUB',
    typeCard: 'CREDIT'
};

const customerCardExample: CustomerCard = {
    active: true,
    id: 'example123',
    number: 1234,
    expires: 'example',
    image: 'example',
    name: 'example',
    status: 'active',
    balance: 12345,
    isVirtual: true,
    currency: 'rub',
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
    cardStatus: 1,
    expires: 'example',
    productName: 'example',
    cardType: 'CREDIT',
    isVirtual: true,
    currencyCode: 'RUB',
    paymentSystem: 'MIR',
    cardImage: 'example'
};

const cardDetailsExample: CardDetails = {
    number: 'example123',
    balance: 12345,
    status: 'active',
    expires: 'example',
    name: 'example',
    type: 'CREDIT',
    isVirtual: true,
    currency: 'rub',
    paymentSystem: 'mir',
    image: 'example'
};

//card products

const cardProductResponseExample: CardProductResponse = {
    active: true,
    id: 'example123',
    productName: 'example',
    cardImage: 'example',
    paymentSystem: 'Visa',
    currencyCode: 'RUB',
    cardType: 'CREDIT',
    cardLevel: 'CLASSIC'
};

const cardProduct: CardProduct = {
    active: true,
    id: 'example123',
    name: 'example',
    image: 'example',
    paymentSystem: 'visa',
    currency: 'rub',
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
    id: '1',
    name: 'example',
    cardImage: 'example',
    paymentSystem: 'Visa',
    cardType: 'CREDIT',
    cardLevel: 'CLASSIC',
    isVirtual: true,
    cardFee: 12345,
    serviceFee: 12345,
    currencyCode: 'RUB',
    active: true,
    cashbackLimit: 12345,
    dayOperationLimit: 12345,
    monthOperationLimit: 12345,
    amountDay: 12345,
    amountOperation: 12345,
    withdrawalOperation: 12345,
    client: 12345,
    partnerClient: 12345,
    localCustomer: 12345,
    internationalCustomer: 12345,
    transferClient: 12345,
    transferPartnerClient: 12345,
    transferNonPartnerClient: 12345,
    internationalTransfer: 12345
};

const cardProductDetailsExample: CardProductDetails = {
    name: 'example',
    image: 'example',
    paymentSystem: 'visa',
    type: 'CREDIT',
    level: 'CLASSIC',
    isVirtual: true,
    cardFee: 12345,
    serviceFee: 12345,
    currency: 'rub',
    active: true,
    cashbackLimit: 12345,
    dayOperationLimit: 12345,
    monthOperationLimit: 12345,
    limits: [
        {
            key: 'amountDay',
            value: 12345
        },
        {
            key: 'amountOperation',
            value: 12345
        },
        {
            key: 'withdrawalOperation',
            value: 12345
        }
    ],
    conditions: [
        {
            key: 'client',
            value: 12345
        },
        {
            key: 'partnerClient',
            value: 12345
        },
        {
            key: 'localCustomer',
            value: 12345
        },
        {
            key: 'internationalCustomer',
            value: 12345
        },
        {
            key: 'transferClient',
            value: 12345
        },
        {
            key: 'transferPartnerClient',
            value: 12345
        },
        {
            key: 'transferNonPartnerClient',
            value: 12345
        },
        {
            key: 'internationalTransfer',
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
