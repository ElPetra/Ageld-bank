import { Text, Card, Columns } from 'src/shared/ui';

import { useTranslation } from 'react-i18next';

import { CONSULT_INDIVID_HOURS, CONSULT_JURIDIC_HOURS } from '../../model';

import { WorkHoursBlock } from './working-hours-block';
import './styles.scss';

export const WorkingHours = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Text weight='bold' size='m'>
                {t('Режим работы')}
            </Text>
            <Card borderRadius='extra-large' padding='large'>
                <Columns number='3'>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {t('Консультация физических лиц')}
                        </Text>
                        <WorkHoursBlock hours={CONSULT_INDIVID_HOURS} />
                    </div>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {t('Консультация юридических лиц')}
                        </Text>
                        <WorkHoursBlock hours={CONSULT_JURIDIC_HOURS} />
                    </div>
                    <div className='contacts-page__working-hours-block'>
                        <Text weight='medium' size='m'>
                            {t('Блокировка карты')}
                        </Text>
                        <WorkHoursBlock hours={'круглосуточно'} />
                    </div>
                </Columns>
            </Card>
        </div>
    );
};
