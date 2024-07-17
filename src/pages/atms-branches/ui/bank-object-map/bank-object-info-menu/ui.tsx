import { useTranslation } from 'react-i18next';

import { AsideMenu, Icon, Text } from 'src/shared/ui';
import { objectTypeName } from 'src/shared/model';
import { isOpen } from 'src/shared/lib';

import { getAddress, getSchedule, getStatus } from '../../../lib';

import type { BankObject } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
import './styles.scss';

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    bankObject: BankObject | undefined;
}

export function BankObjectInfoMenu({ visible, setVisible, bankObject }: Props) {
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
                {bankObject && (
                    <>
                        <div className='bank-object-info__name'>
                            <div>
                                <Icon icon='building' widthAndHeight={32} />
                                <Text weight='bold' size='l'>
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
                            <Text weight='medium' color='tertiary'>
                                {getAddress(bankObject)}
                            </Text>
                        </div>
                        <div className='bank-object-info__schedule'>
                            {t('Понедельник - Пятница: ') +
                                getSchedule(bankObject.schedule[0]) +
                                '\n' +
                                t('Суббота: ') +
                                t(getSchedule(bankObject.schedule[5])) +
                                '\n' +
                                t('Воскресенье - ') +
                                t(getSchedule(bankObject.schedule[6]))}
                        </div>
                        <Text
                            color={
                                isOpen(bankObject.schedule)
                                    ? 'action'
                                    : 'tertiary'
                            }
                        >
                            {(isOpen(bankObject.schedule)
                                ? t('Открыто до ')
                                : t('Закрыто до ')) +
                                getStatus(bankObject.schedule)}
                        </Text>
                        <Text weight='medium'>
                            {t('Контактная информация')}
                        </Text>
                        <div className='bank-object-info__contacts'>
                            <div>{t('Телефон отделения:')}</div>
                            <Text color='action'>{bankObject.phoneNumber}</Text>
                        </div>
                        {bankObject.email && (
                            <div className='bank-object-info__contacts'>
                                <div>{t('E-mail:')}</div>
                                <Text color='action'>{bankObject.email}</Text>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AsideMenu>
    );
}
