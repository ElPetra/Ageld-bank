import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';
import {
    ACCOUNT_NUMBER_REPLACEMENT,
    accountTypes,
    currencySymbol,
    RouteName
} from 'src/shared/model';

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: Account;
    children: ReactNode;
    currentNumber: string;
    setCurrentNumber: Dispatch<SetStateAction<string>>;
}

export const AccountCard = ({
    account,
    children,
    currentNumber,
    setCurrentNumber
}: Props) => {
    const { t } = useTranslation();
    return (
        <div>
            <Link to={RouteName.ACCOUNT_PAGE + '/' + account.number}>
                <Card gap='medium' justify='space-between'>
                    <div className='account__card__column'>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account__card__info'>
                            <Text weight='medium'>
                                <div className='account__card__info__eye'>
                                    {currentNumber === account.number
                                        ? account.number
                                        : account.number.replace(
                                              /.{16}/gm,
                                              ACCOUNT_NUMBER_REPLACEMENT
                                          )}
                                    <button
                                        aria-label='Показать номер счета полностью'
                                        type='button'
                                        onClick={e => {
                                            e.preventDefault();
                                            setCurrentNumber(prev =>
                                                prev === account.number
                                                    ? ''
                                                    : account.number
                                            );
                                        }}
                                    >
                                        <Icon
                                            icon={
                                                currentNumber === account.number
                                                    ? 'eye-open'
                                                    : 'eye-close'
                                            }
                                        />
                                    </button>
                                </div>
                            </Text>
                            <Text weight='medium' color='tertiary'>
                                {t(accountTypes[account.type])}
                            </Text>
                        </div>
                    </div>
                    <div className='account__card__column'>
                        {children}
                        <div className='account__card__balance'>
                            <Text weight='medium'>{account.balance}</Text>
                            <div className='account__card__balance-currency'>
                                <Text weight='extra-bold' size='xs'>
                                    {currencySymbol[account.currency]}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
};
