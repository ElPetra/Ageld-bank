import type { Card } from 'src/widgets/cards/model';

export const sortByCreated = (cards: Card[]): Card[] => {
    return [...cards].sort((a, b) => b.created.getTime() - a.created.getTime());
};
