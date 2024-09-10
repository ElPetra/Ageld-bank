import { useTranslation } from 'react-i18next';

import { Table, Container, Text, Card } from 'src/shared/ui';
import { formatDate, getMonthEn, getMonthRu } from 'src/shared/lib';
import { BackButton } from 'src/features/multi-step-form';
import { currencySymbol } from 'src/shared/model';

import type { CreditDetails } from 'src/shared/model';

import './styles.scss';

const arrColumnsEng = [
    'No',
    'Payment details',
    'Payment amount',
    'Principal debt',
    'Percentage',
    'Loan balance'
];

const columnstToTextObj = {
    No: '№',
    'Payment details': 'Дата платежа',
    'Payment amount': 'Сумма платежа',
    'Principal debt': 'Основной долг',
    Percentage: 'Проценты',
    'Loan balance': 'Остаток по кредиты'
};

const credit: CreditDetails = {
    id: '1',
    name: 'Срочный',
    amount: 200000,
    remainPay: 110000,
    currency: 'rub',
    status: 'active',
    percentRate: 15.5,
    term: 12,
    paymentDate: '2024-08-17 00:00:00+00',
    payment: 18000,
    contractNumber: '12341234123412341234'
};

const dataArr = [
    {
        No: '0',
        'Payment details': '01.08.2024',
        'Payment amount': '0,00',
        'Principal debt': '0,00',
        Percentage: '0,00',
        'Loan balance': '200 000,00'
    },
    {
        No: '1',
        'Payment details': '01.09.2024',
        'Payment amount': '18 098,88',
        'Principal debt': '15 473,20',
        Percentage: '2625,68',
        'Loan balance': '184 526,80'
    },
    {
        No: '2',
        'Payment details': '01.10.2024',
        'Payment amount': '18 098,88',
        'Principal debt': '15 754,48',
        Percentage: '2344,40',
        'Loan balance': '168 772,32'
    },
    {
        No: '3',
        'Payment details': '01.11.2024',
        'Payment amount': '18 098,88',
        'Principal debt': '15 883,17',
        Percentage: '2215,71',
        'Loan balance': '152 889,15'
    },
    {
        No: '4',
        'Payment details': '01.12.2024',
        'Payment amount': '18 098,88',
        'Principal debt': '16 156,44',
        Percentage: '1942,44',
        'Loan balance': '136 732,71'
    },
    {
        No: '5',
        'Payment details': '01.01.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '16 156,44',
        Percentage: '1795,24',
        'Loan balance': '120 429,07'
    },
    {
        No: '6',
        'Payment details': '01.02.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '16 303,64',
        Percentage: '1585,37',
        'Loan balance': '103 915,56'
    },
    {
        No: '7',
        'Payment details': '01.03.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '16 513,51',
        Percentage: '1235,60',
        'Loan balance': '87 052,28'
    },
    {
        No: '8',
        'Payment details': '01.04.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '16 863,28',
        Percentage: '1145,99',
        'Loan balance': '70 099,39'
    },
    {
        No: '9',
        'Payment details': '01.05.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '16 952,89',
        Percentage: '893,05',
        'Loan balance': '52 893,56'
    },
    {
        No: '10',
        'Payment details': '01.06.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '17 205,83',
        Percentage: '696,31',
        'Loan balance': '35 490,99'
    },
    {
        No: '11',
        'Payment details': '01.07.2025',
        'Payment amount': '18 098,88',
        'Principal debt': '17 402,57',
        Percentage: '452,15',
        'Loan balance': '17 844,26'
    },
    {
        No: '12',
        'Payment details': '01.08.2025',
        'Payment amount': '18 079, 17',
        'Principal debt': '17 844,26',
        Percentage: '234,91',
        'Loan balance': '0,00'
    }
];

export const CreditPaymentSchedulePage = () => {
    const { i18n, t } = useTranslation();

    return (
        <Container>
            <BackButton />
            <div className='payment__shedule__wrapper'>
                <Text size='l' weight='bold' align='center'>
                    {t('График платежей')}
                </Text>
            </div>
            <div className='payment__shedule__card'>
                <Card
                    gap='small'
                    color='tertiary'
                    justify='space-between'
                    borderRadius='extra-large'
                >
                    <div className='payment__shedule__text'>
                        <Text size='xs' color='tertiary'>
                            {t('Тип кредита')}
                        </Text>
                        <Text size='m' weight='medium'>
                            {'A-Geld ' + credit.name}
                        </Text>
                    </div>
                    <div className='payment__shedule__text'>
                        <Text size='xs' color='tertiary'>
                            {t('Сумма кредита')}
                        </Text>
                        <Text size='m' weight='medium'>
                            {credit.amount.toLocaleString() +
                                ' ' +
                                currencySymbol[credit.currency]}
                        </Text>
                    </div>
                    <div className='payment__shedule__text'>
                        <Text size='xs' color='tertiary'>
                            {t('Процентная ставка')}
                        </Text>
                        <Text size='m' weight='medium'>
                            {credit.percentRate + '%'}
                        </Text>
                    </div>
                    <div className='payment__shedule__text'>
                        <Text size='xs' color='tertiary'>
                            {t('Тип кредита')}
                        </Text>
                        <Text size='m' weight='medium'>
                            {credit.term +
                                ' ' +
                                (i18n.language === 'ru'
                                    ? getMonthRu(credit.term)
                                    : getMonthEn(credit.term))}
                        </Text>
                    </div>
                    {'paymentDate' in credit && credit.paymentDate && (
                        <div className='payment__shedule__text'>
                            <Text size='xs' color='tertiary'>
                                {t('Дата заключения договора')}
                            </Text>
                            <Text size='m' weight='medium'>
                                {formatDate(credit.paymentDate)}
                            </Text>
                        </div>
                    )}
                </Card>
            </div>
            <Table
                columns={arrColumnsEng}
                columnsToText={columnstToTextObj}
                data={dataArr}
            />
        </Container>
    );
};
