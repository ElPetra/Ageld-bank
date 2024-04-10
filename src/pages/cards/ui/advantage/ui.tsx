import { Text } from 'src/shared/ui';

import { advantages } from '../../model';

import type { Card } from 'src/widgets/cards/model';

import './style.scss';

interface Props {
    card: Card;
}

export const Advantages = ({ card }: Props) => {
    return (
        <>
            {advantages.map(({ key, title, description }) => (
                <div key={key} className='advantage'>
                    <Text weight='bold' size='m' color='primary-day'>
                        {description(card[key])}
                    </Text>
                    <Text color='copy' size='xs'>
                        {title}
                    </Text>
                </div>
            ))}
        </>
    );
};
