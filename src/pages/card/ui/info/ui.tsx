import { Icon, Text } from 'src/shared/ui/index.js';
import { CARD_NUMBER_REPLACEMENT } from 'src/shared/model/index.js';

import type { Card } from 'src/shared/model/index.js';

interface Props {
    card: Card;
}
export const CardInfo = ({ card }: Props) => {
    const handleCopyCardNumber = () => {
        navigator.clipboard.writeText(card.cardNumber);
    };
    return (
        <div className='advantages'>
            <div className='advantage'>
                <Text weight='bold' size='m' color='quadruple'>
                    {card.cardNumber.replace(
                        /^(.{4})(.*)(.{4})$/,
                        `$1${CARD_NUMBER_REPLACEMENT}$3`
                    )}
                    <button onClick={handleCopyCardNumber}>
                        <Icon icon='copy' />
                    </button>
                </Text>
                <Text color='quadruple' size='xs'>
                    Номер карты
                </Text>
            </div>
            <div className='advantage'>
                <Text color='quadruple' size='xs'>
                    {card.cvvEncrypted.replace(/./g, '*')}
                </Text>
                <Text color='quadruple' size='xs'>
                    CVV
                </Text>
            </div>
            <div className='advantage'>
                <Text color='quadruple' size='xs'>
                    Срок действия карты
                </Text>
            </div>
        </div>
    );
};
