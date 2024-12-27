/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import { CardIconWithName } from 'src/entities/cards';
import { PAYMENTS_VARIANTS } from 'src/shared/model';

import { SectionHeader } from '../sectionHeader';

import styles from './styles.module.scss';

export const PaymentsList: React.FC<{ classStyle?: string }> = ({
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
            <SectionHeader header={t('payments')} />
            <div className={styles.cards}>
                {PAYMENTS_VARIANTS.map(card => (
                    <CardIconWithName key={card.name} {...card} />
                ))}
            </div>
        </div>
    );
};
