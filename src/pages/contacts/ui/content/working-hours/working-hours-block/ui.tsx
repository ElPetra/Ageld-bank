import { ALL_DAY, workingHoursLabels } from 'src/pages/contacts/model';
import { Text } from 'src/shared/ui';

interface Props {
    hours: string[] | 'круглосуточно';
}

export const WorkHoursBlock = ({ hours }: Props) => {
    if (hours === ALL_DAY) {
        return <Text weight='medium'>{ALL_DAY}</Text>;
    }
    return (
        <div className='bank-contacts_working-hours-block_hours'>
            {hours.map((el, index) => (
                <div key={index} className='hours'>
                    <Text>{workingHoursLabels[index]}</Text>
                    <Text weight='medium'>{el}</Text>
                </div>
            ))}
        </div>
    );
};
