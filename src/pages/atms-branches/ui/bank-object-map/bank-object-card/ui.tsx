import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';
import { objectTypeName } from 'src/shared/model';
import { isOpen } from 'src/shared/lib';

import { getAddress, getSchedule, getStatus } from '../../../lib';

import type { Dispatch, SetStateAction } from 'react';
import type { BankObject } from 'src/shared/model';

import './styles.scss';

interface Props {
    bankObject: BankObject;
    setVisible: Dispatch<SetStateAction<boolean>>;
    setCurrent: Dispatch<SetStateAction<BankObject | undefined>>;
}

export function BankObjectCard({ bankObject, setVisible, setCurrent }: Props) {
    const { t } = useTranslation();
    return (
        <Card
            color='secondary'
            key={bankObject.objectNumber}
            direction='column'
            borderRadius='extra-large'
            padding='small-medium'
        >
            <div className='bank-object__name'>
                <Icon icon='building' />
                <Text weight='bold' size='m'>
                    {t(
                        objectTypeName[
                            t(
                                bankObject.objectTypeName
                            ) as keyof typeof objectTypeName
                        ]
                    ) +
                        ' №' +
                        bankObject.objectNumber}
                </Text>
            </div>
            <Text weight='medium'>{getAddress(bankObject)}</Text>
            <div className='bank-object__schedule'>
                {t('Понедельник - Пятница: ') +
                    getSchedule(bankObject.schedule[0]) +
                    '\n' +
                    t('Суббота: ') +
                    t(getSchedule(bankObject.schedule[5])) +
                    '\n' +
                    t('Воскресенье - ') +
                    t(getSchedule(bankObject.schedule[6]))}
            </div>
            <div>
                <Text
                    color={isOpen(bankObject.schedule) ? 'action' : 'tertiary'}
                >
                    {(isOpen(bankObject.schedule)
                        ? t('Открыто до ')
                        : t('Закрыто до ')) + getStatus(bankObject.schedule)}
                </Text>
            </div>
            <button
                className='bank-object__info-button'
                onClick={() => {
                    setVisible(true);
                    setCurrent(bankObject);
                }}
            >
                <div>{t('Показать полную информацию')}</div>
                <Icon icon='arrow-right-accent' />
            </button>
        </Card>
    );
}
