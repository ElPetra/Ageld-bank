import { Container } from 'src/shared/ui';
import { BackButton } from 'src/features/multi-step-form';

import { Contacts } from './contacts';
import { Socials } from './socials';
import { WorkingHours } from './working-hours';

import './styles.scss';

export const ContactsPage = () => {
    return (
        <Container>
            <div className='contacts-page'>
                <BackButton />
                <div className='contacts-page__blocks'>
                    <Contacts />
                    <Socials />
                    <WorkingHours />
                </div>
            </div>
        </Container>
    );
};
