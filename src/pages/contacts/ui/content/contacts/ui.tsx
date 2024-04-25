import { Text } from 'src/shared/ui';

import {
    CONTACTS,
    CORPORATE_PHONES,
    INDIVIDUAL_PHONES,
    SUPPORT,
    corporate,
    individuals,
    support
} from '../../../model';

import { ContactsBlock } from './contacts-block';

import './styles.scss';

export const Contacts = () => {
    return (
        <>
            <Text weight='medium' size='m'>
                {CONTACTS}
            </Text>
            <div className='bank-contacts_contacts'>
                <div className='bank-contacts_contacts-block'>
                    <Text weight='medium' size='m'>
                        {INDIVIDUAL_PHONES}
                    </Text>
                    <ContactsBlock contacts={individuals} />
                </div>
                <div className='bank-contacts_contacts-block'>
                    <Text weight='medium' size='m'>
                        {CORPORATE_PHONES}
                    </Text>
                    <ContactsBlock contacts={corporate} />
                </div>
                <div className='bank-contacts_contacts-block'>
                    <Text weight='medium' size='m'>
                        {SUPPORT}
                    </Text>
                    <ContactsBlock contacts={support} />
                </div>
            </div>
        </>
    );
};
