import { useTranslation } from 'react-i18next';
import { Text } from 'src/shared/ui';

import { workingHoursLabels } from '../../../model';

interface Props {
    hours: string[] | 'круглосуточно';
}

export const WorkHoursBlock = ({ hours }: Props) => {
    const { t } = useTranslation();
    if (hours === 'круглосуточно') {
        return <Text weight='medium'>{t('круглосуточно')}</Text>;
    }
    return (
        <div className='contacts-page__working-hours-block__hours'>
            {hours.map((el, index) => (
                <div key={index}>
                    <Text weight='medium'>
                        {t(workingHoursLabels[index]) + t(el)}
                    </Text>
                </div>
            ))}
        </div>
    );
};
