import { Icon, Text } from 'src/shared/ui';
import './styles.scss';
import {
    type Socials as Soc,
    socials,
    SOCIALS_BOTS
} from 'src/pages/contacts/model';

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
