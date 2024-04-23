import { AsideMenu, Icon, Text } from 'src/shared/ui';

import { objectTypeName } from '../../model';
import { getAddress, getSchedule, getStatus } from '../../lib';

import type { BankObject } from '../../model';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    current: BankObject | undefined;
}

export function BankObjectInfoMenu({ visible, setVisible, current }: Props) {
    return (
        <AsideMenu visible={visible}>
            <div className='bank-object-info'>
                <div>
                    <button
                        className='bank-object-info__button'
                        onClick={() => setVisible(false)}
                    >
                        <Icon icon='arrow' />
                        <Text color='action'>Вернуться к списку</Text>
                    </button>
                </div>
                {current && (
                    <>
                        <div className='bank-object-info__name'>
                            <div>
                                <Icon icon='building' widthAndHeight={32} />
                                <Text weight='bold' size='l'>
                                    {objectTypeName[current.objectTypeName] +
                                        ' №' +
                                        current.objectNumber}
                                </Text>
                            </div>
                            <Text color='quadruple'>{getAddress(current)}</Text>
                        </div>
                        <div className='bank-object-info__schedule'>
                            {getSchedule(current.schedule)}
                        </div>
                        <div>
                            <Text
                                color={
                                    getStatus(current.schedule).includes(
                                        'Открыто'
                                    )
                                        ? 'action'
                                        : 'quadruple'
                                }
                            >
                                {getStatus(current.schedule)}
                            </Text>
                        </div>
                    </>
                )}
            </div>
        </AsideMenu>
    );
}
