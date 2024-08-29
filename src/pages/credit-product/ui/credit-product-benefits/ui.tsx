import { useTranslation } from 'react-i18next';

import { Columns, Icon, Text } from 'src/shared/ui';

import './styles.scss';

export const CreditProductBenefits = () => {
    const { t } = useTranslation();
    return (
        <div className='credit-product-benefits'>
            <Columns number='3'>
                <div>
                    <Icon icon='switcher' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Быстрое принятие решения')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Срок рассмотрения заявки с момента подачи составляет 24 часа'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='percent' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Фиксированная ставка')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Постоянная процентная ставка позволит Вам планировать свои расходы'
                            )}
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
                                'Открыть и погасить кредит можно через интернет-банк'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='money' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Досрочное погашение')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'При досрочном снятии денежных средств вы получите 0,01% от суммы накопленных процентов'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='currency' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Схема расчета платежей')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Погашение равными долями,  аннуитетным способом'
                            )}
                        </Text>
                    </div>
                </div>
                <div>
                    <Icon icon='phone' width={48} />
                    <div>
                        <Text size='m' weight='medium'>
                            {t('Удобное погашение')}
                        </Text>
                        <Text color='tertiary'>
                            {t(
                                'Погашение через интернет-банк или в отделениях'
                            )}
                        </Text>
                    </div>
                </div>
            </Columns>
        </div>
    );
};
