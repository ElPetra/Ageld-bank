import { Text } from 'src/shared/ui';

import { workingHoursLabels } from '../../../model';

interface Props {
    hours: string[] | 'круглосуточно';
}

export const WorkHoursBlock = ({ hours }: Props) => {
    if (hours === 'круглосуточно') {
        return <Text weight='medium'>{'круглосуточно'}</Text>;
    }
    return (
        <div className='contacts-page__working-hours-block__hours'>
            {hours.map((el, index) => (
                <div key={index}>
                    <Text weight='medium'>
                        {workingHoursLabels[index] + el}
                    </Text>
                </div>
            ))}
        </div>
    );
};
