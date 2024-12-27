import { Text } from 'src/shared/ui';

import styles from './styles.module.scss';

type TSectionHeaderProps = { header: string };

export const SectionHeader = ({ header }: TSectionHeaderProps) => {
    return (
        <div className={styles.sectionHeader}>
            <Text weight='bold' size='m'>
                {header}
            </Text>
            <Text weight='bold' size='m'>
                &#5171;
            </Text>
        </div>
    );
};
