import { DEPOSITS_NOT_FOUND, MAKE_DEPOSIT } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';

export const DepositPage = () => {
    return <MessageCard title={DEPOSITS_NOT_FOUND} buttonText={MAKE_DEPOSIT} />;
};
