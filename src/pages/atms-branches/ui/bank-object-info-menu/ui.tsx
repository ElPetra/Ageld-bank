import { AsideMenu, Icon, Text } from 'src/shared/ui';

import { objectTypeName } from 'src/shared/model';

import { useTranslation } from 'react-i18next';

import { getAddress, getSchedule, getStatus } from '../../lib';

import type { BankObject } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
import './styles.scss';

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    current: BankObject | undefined;
}

export function BankObjectInfoMenu({ visible, setVisible, current }: Props) {
    const { t } = useTranslation();
    return (
        <AsideMenu visible={visible}>
            <div className='bank-object-info'>
                <div>
                    <button
                        className='bank-object-info__button'
                        onClick={() => setVisible(false)}
                    >
                        <Icon icon='arrow-left-accent' />
                        <Text color='action'>{t('Вернуться к списку')}</Text>
                    </button>
                </div>
                {current && (
                    <>
                        <div className='bank-object-info__name'>
                            <div>
                                <Icon icon='building' widthAndHeight={32} />
                                <Text weight='bold' size='l'>
                                    {t(
                                        objectTypeName[
                                            t(
                                                current.objectTypeName
                                            ) as keyof typeof objectTypeName
                                        ]
                                    ) +
                                        ' №' +
                                        current.objectNumber}
                                </Text>
                            </div>
                            <Text weight='medium' color='tertiary'>
                                {getAddress(current)}
                            </Text>
                        </div>
                        <div className='bank-object-info__schedule'>
                            {getSchedule(t(current.schedule))}
                        </div>
                        <div>
                            <Text
                                color={
                                    getStatus(current.schedule).includes(
                                        'Открыто'
                                    ) ||
                                    getStatus(current.schedule).includes('Open')
                                        ? 'action'
                                        : 'tertiary'
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
