import i18next from 'src/shared/model/i18n';

import { Link } from 'react-router-dom';

import { Card, Icon, Text } from 'src/shared/ui';
import {
    ACCOUNT_NUMBER_REPLACEMENT,
    accountTypes,
    currencySymbol,
    RouteName
} from 'src/shared/model';

import type { Dispatch, MouseEvent, ReactNode, SetStateAction } from 'react';
import type { Account } from 'src/shared/model';

import './styles.scss';

interface Props {
    account: Account;
    children: ReactNode;
    showAllNumber: boolean;
    setShowAllNumber: Dispatch<SetStateAction<string>>;
}

export const AccountCard = ({
    account,
    children,
    showAllNumber,
    setShowAllNumber
}: Props) => {
    const changeShowAllNumber = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const elId =
            (e.target as HTMLButtonElement).closest('button')?.id || '';
        setShowAllNumber(prev => (prev === elId ? '' : elId));
    };
    return (
        <div>
            <Link to={RouteName.ACCOUNT_PAGE + '/' + account.number}>
                <Card gap='medium' justify='space-between'>
                    <div className='account__card__column'>
                        <Icon widthAndHeight={40} icon={account.currency} />
                        <div className='account__card__info'>
                            <Text weight='medium'>
                                {showAllNumber
                                    ? account.number
                                    : account.number.replace(
                                          /.{16}/gm,
                                          ACCOUNT_NUMBER_REPLACEMENT
                                      )}
                                <button
                                    aria-label='Показать номер счета полностью'
                                    id={account.number}
                                    type='button'
                                    onClick={changeShowAllNumber}
                                >
                                    <Icon
                                        icon={
                                            showAllNumber
                                                ? 'eye-open'
                                                : 'eye-close'
                                        }
                                    />
                                </button>
                            </Text>
                            <Text weight='medium' color='tertiary'>
                                {i18next.t(accountTypes[account.type])}
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
