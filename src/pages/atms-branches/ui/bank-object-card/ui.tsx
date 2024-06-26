import { Card, Icon, Text } from 'src/shared/ui';

import { useTranslation } from 'react-i18next';
import { objectTypeName } from 'src/shared/model';

import { getAddress, getSchedule, getStatus } from '../../lib';

import type { BankObject } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
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
                {getSchedule(t(bankObject.schedule))}
            </div>
            <div>
                <Text
                    color={
                        getStatus(bankObject.schedule).includes('Открыто') ||
                        getStatus(bankObject.schedule).includes('Open')
                            ? 'action'
                            : 'tertiary'
                    }
                >
                    {getStatus(bankObject.schedule)}
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
