import { Text } from 'src/shared/ui';

import type { AdvantageConfig } from '../../model';
import type { Card, CardProductInfo } from 'src/shared/model';
import './style.scss';
import type { AdvantageCardConfig } from 'src/pages/card/model/index.js';

interface Props {
    card: Card | CardProductInfo;
    items: AdvantageConfig[] | AdvantageCardConfig[];
    type?: 'card' | 'card-product';
}

export const Advantages = ({ card, items, type }: Props) => {
    return (
        <div className='advantages'>
            {items.map(({ key, title, description }) => (
                <div key={key} className='advantage'>
                    <Text
                        weight='bold'
                        size='m'
                        color={type === 'card' ? 'grey' : 'quadruple'}
                    >
                        {description(card[key as keyof typeof card])}
                    </Text>
                    <Text color='quadruple' size='xs'>
                        {title}
                    </Text>
                </div>
            ))}
        </div>
    );
};
