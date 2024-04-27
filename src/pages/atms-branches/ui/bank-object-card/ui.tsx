import { Card, Icon, Text } from 'src/shared/ui';

import { objectTypeName } from 'src/shared/model';

import { getAddress, getSchedule, getStatus } from '../../lib';

import type { BankObject } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    bankObject: BankObject;
    setVisible: Dispatch<SetStateAction<boolean>>;
    current: BankObject | undefined;
    setCurrent: Dispatch<SetStateAction<BankObject | undefined>>;
}

export function BankObjectCard({
    bankObject,
    setVisible,
    current,
    setCurrent
}: Props) {
    return (
        <Card
            key={bankObject.objectNumber}
            status={
                bankObject.latitude === current?.latitude &&
                bankObject.longitude === current?.longitude
                    ? 'active'
                    : ''
            }
        >
            <div className='bank-object__name'>
                <Icon icon='building' />
                <Text weight='bold' size='m'>
                    {objectTypeName[bankObject.objectTypeName] +
                        ' №' +
                        bankObject.objectNumber}
                </Text>
            </div>
            <div>{getAddress(bankObject)}</div>
            <div className='bank-object__schedule'>
                {getSchedule(bankObject.schedule)}
            </div>
            <div>
                <Text
                    color={
                        getStatus(bankObject.schedule).includes('Открыто')
                            ? 'action'
                            : 'quadruple'
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
                <div>Показать полную информацию</div>
                <Icon icon='arrow-3' />
            </button>
        </Card>
    );
}
