import { constactsMatcher, type ContactBlock } from 'src/pages/contacts/model';
import { Text } from 'src/shared/ui';

interface Props {
    contacts: ContactBlock;
}

export const ContactsBlock = ({ contacts }: Props) => {
    return (
        <div className='bank-contacts_contacts-block_phones'>
            {Object.keys(contacts).map((el, index) => {
                if (index > 3) {
                    return null;
                }
                return (
                    <div key={index} className='phone'>
                        <a
                            className='text text-inherit s medium left'
                            href={
                                (index !== 2 ? 'tel:' : 'mailto:') +
                                contacts[el as keyof ContactBlock]
                            }
                        >
                            {contacts[el as keyof ContactBlock]}
                        </a>
                        <Text weight='medium'>{constactsMatcher[index]}</Text>
                    </div>
                );
            })}
        </div>
    );
};
