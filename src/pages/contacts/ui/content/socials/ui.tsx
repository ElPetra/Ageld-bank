import { Icon, Text } from 'src/shared/ui';

import { type Socials as Soc, socials, SOCIALS_BOTS } from '../../../model';

import './styles.scss';

export const Socials = () => {
    return (
        <>
            <Text weight='medium' size='m'>
                {SOCIALS_BOTS}
            </Text>
            <div className='bank-contacts_socials'>
                {socials.map((el: Soc) => (
                    <a href='/' key={el.text} className='social'>
                        <Icon widthAndHeight={56} icon={el.icon} />
                        <Text weight='medium'>{el.text}</Text>
                    </a>
                ))}
            </div>
        </>
    );
};
