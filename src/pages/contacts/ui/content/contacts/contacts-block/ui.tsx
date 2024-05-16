import { Link } from 'react-router-dom';
import { Text } from 'src/shared/ui';

import { constactsMatcher } from '../../../../model';

import type { ContactBlock } from '../../../../model';

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
                        <Link
                            to={
                                (index !== 2 ? 'tel:' : 'mailto:') +
                                contacts[el as keyof ContactBlock]
                            }
                            target='_blank'
                        >
                            <Text weight='medium'>
                                {contacts[el as keyof ContactBlock]}
                            </Text>
                        </Link>
                        <Text weight='medium' color='light'>
                            {constactsMatcher[index]}
                        </Text>
                    </div>
                );
            })}
        </div>
    );
};
