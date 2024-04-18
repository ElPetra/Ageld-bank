import {
    ALL_DAY,
    CARD_BLOCKING,
    CONSULT_INDIVID,
    CONSULT_INDIVID_HOURS,
    CONSULT_JURIDIC,
    CONSULT_JURIDIC_HOURS,
    WORKING_HOURS
} from 'src/pages/contacts/model';
import { Text } from 'src/shared/ui';

import './styles.scss';
import { WorkHoursBlock } from './working-hours-block/ui';

export const WorkingHours = () => {
    return (
        <>
            <Text weight='medium' size='m'>
                {WORKING_HOURS}
            </Text>
            <div className='bank-contacts_working-hours'>
                <div className='bank-contacts_working-hours-block'>
                    <Text weight='medium' size='m'>
                        {CONSULT_INDIVID}
                    </Text>
                    <WorkHoursBlock hours={CONSULT_INDIVID_HOURS} />
                </div>
                <div className='bank-contacts_working-hours-block'>
                    <Text weight='medium' size='m'>
                        {CONSULT_JURIDIC}
                    </Text>
                    <WorkHoursBlock hours={CONSULT_JURIDIC_HOURS} />
                </div>
                <div className='bank-contacts_working-hours-block'>
                    <Text weight='medium' size='m'>
                        {CARD_BLOCKING}
                    </Text>
                    <WorkHoursBlock hours={ALL_DAY} />
                </div>
            </div>
        </>
    );
};
