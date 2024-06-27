import { useTranslation } from 'react-i18next';

import { Columns, Icon, Text } from 'src/shared/ui';

import './styles.scss';

export const DepositProductBenefits = () => {
    const { t } = useTranslation();
    return (
        <div className='deposit-product-benefits'>
            <Columns number='3'>
                <div>
                    <Icon icon='switcher' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Гибкие условия')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Депозит от 1 до 36 месяцев с возможностью пополнения'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='percent' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Капитализация процентов')}
                        </Text>
                        <Text color='tertiary'>
                            {t('Проценты присоединяются к сумме депозита')}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='monitor' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Управление онлайн')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Открыть, пополнить и закрыть депозит можно через интернет-банк'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='money' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Дополнительные взносы')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'В зависимости от условий по депозиту вы можете совершать дополнительные взносы и увеличивать свой доход'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='currency' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Выбор из трех валют')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Выбирайте оптимальные валюту и условия по депозиту'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='phone' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Удобное пополнение')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Пополнение через интернет-банк или в отделениях.'
                            )}
                        </Text>
                    </div>
                </div>
            </Columns>
        </div>
    );
};
