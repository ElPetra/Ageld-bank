import React from 'react';
import { MessageCard } from 'src/entities/message';
import { DEPOSITS_NOT_FOUND, MAKE_DEPOSIT } from 'src/shared/model';

export const DepositPage = () => {
    return <MessageCard title={DEPOSITS_NOT_FOUND} buttonText={MAKE_DEPOSIT} />;
};
