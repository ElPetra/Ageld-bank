import { Text } from 'src/shared/ui';

import type { AdvantageConfig } from '../../model';
import type { CardProductInfo } from 'src/shared/model';

import './style.scss';

interface Props {
    card: CardProductInfo;
    items: AdvantageConfig[];
}

export const Advantages = ({ card, items }: Props) => {
    return (
        <div className='advantages'>
            {items.map(({ key, title, description }) => (
                <div key={key} className='advantage'>
                    <Text weight='bold' size='m' color='quadruple'>
                        {description(card[key])}
                    </Text>
                    <Text color='quadruple' size='xs'>
                        {title}
                    </Text>
                </div>
            ))}
        </div>
    );
};
