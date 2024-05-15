import { Icon, Text } from 'src/shared/ui';

import type { AdvantageConfig } from '../../model';
import type { CardDetails, CardProductDetails } from 'src/shared/model';
import type { AdvantageCardConfig } from 'src/pages/card/model';

import './style.scss';

interface Props {
    card: CardDetails | CardProductDetails;
    items: AdvantageConfig[] | AdvantageCardConfig[];
    type?: 'card' | 'card-product';
}
const handleCopyCardNumber = (value: string) => {
    navigator.clipboard.writeText(value);
};

export const Advantages = ({ card, items, type }: Props) => {
    return (
        <div className='advantages'>
            {items.map(({ key, title, description }) => (
                <div key={key} className='advantage'>
                    <div className='advantage__container'>
                        <Text
                            weight='bold'
                            size='m'
                            color={type === 'card' ? 'grey' : 'quadruple'}
                        >
                            {description(card[key as keyof typeof card])}
                        </Text>
                        {type === 'card' && key === 'number' && (
                            <button
                                onClick={() =>
                                    'number' in card &&
                                    handleCopyCardNumber(card.number)
                                }
                            >
                                <Icon icon='copy-grey' />
                            </button>
                        )}
                    </div>
                    <Text color='quadruple' size='xs'>
                        {title}
                    </Text>
                </div>
            ))}
        </div>
    );
};
