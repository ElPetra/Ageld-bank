/* eslint-disable react/prop-types */
import { CardIconWithName } from 'src/entities/cards';

import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import { TRANSFERS_VARIANTS } from 'src/shared/model';

import { SectionHeader } from '../sectionHeader';

import styles from './styles.module.scss';

export const TransfersList: React.FC<{ classStyle?: string }> = ({
    classStyle
}) => {
    const { t } = useTranslation();
    return (
        <div
            className={
                classStyle
                    ? classNames(classStyle, styles.listContainer)
                    : styles.listContainer
            }
        >
            <SectionHeader header={t('transfers')} />
            <div className={styles.cards}>
                {TRANSFERS_VARIANTS.map(card => (
                    <CardIconWithName key={card.name} {...card} />
                ))}
            </div>
        </div>
    );
};
