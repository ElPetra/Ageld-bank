import { useFetchCards } from 'src/shared/lib';
import { CardContent } from 'src/widgets/cards/ui/content';

export const CardProducts = () => {
    const { cards, isLoading } = useFetchCards();
    return <CardContent cards={cards} isLoading={isLoading} type='products' />;
};
