import { Container } from 'src/shared/ui';
import { BackButton } from 'src/features/multi-step-form';

import { Contacts, Socials, WorkingHours } from './content';

import './styles.scss';

export const ContactsPage = () => {
    return (
        <Container>
            <div className='bank-contacts'>
                <BackButton />
                <Contacts />
                <Socials />
                <WorkingHours />
            </div>
        </Container>
    );
};
