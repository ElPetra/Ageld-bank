import {
    CREATE,
    DEPOSITS_NOT_FOUND,
    REQUEST_DEPOSIT,
    RouteName
} from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { DepositCard } from 'src/entities/deposits';

import type { MockDeposit } from 'src/shared/model';

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
