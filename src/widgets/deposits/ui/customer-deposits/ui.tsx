import React from 'react';

import { MessageCard } from 'src/entities/message';
import { CREATE, RouteName } from 'src/shared/model';
import { REQUEST_DEPOSIT } from 'src/shared/model/deposits';
import { DEPOSITS_NOT_FOUND } from 'src/shared/model/deposits';
import { DepositCard } from 'src/entities/deposits/deposit-card';

import type { MockDeposit } from 'src/shared/model/deposits';

interface Props {
    content: MockDeposit[];
}

export const CustomerDeposits = ({ content }: Props) => {
    return (
        <>
            {content.length ? (
                <div>
                    {content.map(el => (
                        <DepositCard key={el.id} deposit={el} />
                    ))}
                </div>
            ) : (
                <MessageCard
                    title={DEPOSITS_NOT_FOUND}
                    buttonText={REQUEST_DEPOSIT}
                    buttonLink={RouteName.DEPOSIT_PAGE + '/' + CREATE}
                />
            )}
        </>
    );
};
