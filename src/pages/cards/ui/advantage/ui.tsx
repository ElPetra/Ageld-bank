import { Text } from 'src/shared/ui';

import { advantages, conditions, limits } from '../../model';

import type { CardInfo } from 'src/widgets/cards/model';

import './style.scss';

interface Props {
    card: CardInfo;
}

export const Advantages = ({ card }: Props) => {
    return (
        <>
            <div className='advantages'>
                {advantages.map(({ key, title, description }) => (
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

            <Text size='m' weight='bold' color='quadruple'>
                Лимиты
            </Text>
            <div className='advantages'>
                {limits.map(({ key, title, description }) => (
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

            <Text size='m' weight='bold' color='quadruple'>
                Условия
            </Text>
            <div className='advantages'>
                {conditions.map(({ key, title, description }) => (
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
        </>
    );
};
