import { BackButton } from 'src/features/multi-step-form';

import { Contacts, Socials, WorkingHours } from './content';

import './styles.scss';

export const ContactsPage = () => {
    return (
        <div className='bank-contacts'>
            <BackButton />
            <Contacts />
            <Socials />
            <WorkingHours />
        </div>
    );
};
