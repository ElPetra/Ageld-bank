import { useFetchCustomerCards } from 'src/shared/lib';
import { CardContent } from 'src/widgets/cards/ui/content';

export const CustomerCards = () => {
    const { cards, isLoading } = useFetchCustomerCards();
    return <CardContent cards={cards} isLoading={isLoading} type='customer' />;
};
