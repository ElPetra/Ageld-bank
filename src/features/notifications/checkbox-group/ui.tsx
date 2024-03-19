import { Checkbox } from 'src/shared/ui/checkbox';
import { Text } from 'src/shared/ui';
interface Props {
    title: string;
    checkboxes: { label: string, defaultIsChecked?: boolean }[];
    handleCheckboxChange: (label: string) => void;
}
export const CheckboxGroup = ({
    title,
    checkboxes,
    handleCheckboxChange
}: Props) => (
    <div>
        <Text weight='bold' size='m' tag='span'>
            {title}
        </Text>
        <ul className='notifications__list'>
            {checkboxes.map(({ label, defaultIsChecked = false }) => (
                <li className='notifications__item' key={label}>
                    <Checkbox
                        label={label}
                        defaultIsChecked={defaultIsChecked}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </li>
            ))}
        </ul>
    </div>
);
