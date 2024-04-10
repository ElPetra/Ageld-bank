import type { Card } from 'src/widgets/cards/model';

export const sortByCreated = (cards: Card[]): Card[] => {
    return [...cards].sort((a, b) => b.created.getTime() - a.created.getTime());
};

export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa';
        case 'МИР':
            return 'mir';
        default:
            return 'visa';
    }
};
