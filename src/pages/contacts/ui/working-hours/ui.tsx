import { Text, Card, Columns } from 'src/shared/ui';

import { CONSULT_INDIVID_HOURS, CONSULT_JURIDIC_HOURS } from '../../model';

import { WorkHoursBlock } from './working-hours-block';

import './styles.scss';

export const WorkingHours = () => {
    return (
        <div>
            <Text weight='bold' size='m'>
                {'Режим работы'}
            </Text>
            <Card borderRadius='extra-large' padding='large'>
                <Columns number='3'>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {'Консультация физических лиц'}
                        </Text>
                        <WorkHoursBlock hours={CONSULT_INDIVID_HOURS} />
                    </div>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {'Консультация юридических лиц'}
                        </Text>
                        <WorkHoursBlock hours={CONSULT_JURIDIC_HOURS} />
                    </div>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {'Блокировка карты'}
                        </Text>
                        <WorkHoursBlock hours={'круглосуточно'} />
                    </div>
                </Columns>
            </Card>
        </div>
    );
};
