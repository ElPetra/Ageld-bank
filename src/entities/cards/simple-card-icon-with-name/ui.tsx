/* eslint-disable react/prop-types */
import { Icon, Text } from 'src/shared/ui';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import type { TCardIconWithName } from 'src/shared/model';

export const CardIconWithName: React.FC<TCardIconWithName> = props => {
    const { icon, name, link } = props;
    const { t } = useTranslation();
    return (
        <Link to={link} className={styles.mediumCardInfo}>
            <div className={styles.firstRow}>
                {icon && <Icon icon={icon} width={32} height={32} />}
            </div>
            <div>
                <Text weight='medium'>{t(name)} </Text>
            </div>
        </Link>
    );
};
