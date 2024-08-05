import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, Columns, Icon, Text } from 'src/shared/ui';

import './styles.scss';

export function AccountCreationCards() {
    const { t } = useTranslation();
    return (
        <>
            <Text tag='h2' size='m' weight='medium'>
                {t('Открыть счет')}
            </Text>
            <div className='create-account_cards'>
                <Columns number='3'>
                    <Card direction='column'>
                        <div>
                            <Text size='s' weight='medium'>
                                {t('Кредитный счет')}
                            </Text>
                            <Text size='xs'>
                                {t('Откройте счет не выходя из дома')}
                            </Text>
                        </div>
                        <Link to='/account/create'>
                            <Text color='action' weight='medium' size='s'>
                                {t('Открыть счет')}
                                <Icon
                                    icon='arrow-right-accent'
                                    widthAndHeight={24}
                                />
                            </Text>
                        </Link>
                    </Card>
                    <Card direction='column'>
                        <div>
                            <Text size='s' weight='medium'>
                                {t('Дебетовый счет')}
                            </Text>
                            <Text size='xs'>
                                {t('Откройте счет не выходя из дома')}
                            </Text>
                        </div>
                        <Link
                            to='/account/create'
                            className='create-account_link'
                        >
                            <Text color='action' weight='medium' size='s'>
                                {t('Открыть счет')}
                                <Icon
                                    icon='arrow-right-accent'
                                    widthAndHeight={24}
                                />
                            </Text>
                        </Link>
                    </Card>
                    <Card direction='column'>
                        <div>
                            <Text size='s' weight='medium'>
                                {t('Депозитный счет')}
                            </Text>
                            <Text size='xs'>
                                {t('Откройте счет не выходя из дома')}
                            </Text>
                        </div>
                        <Link to='/account/create'>
                            <Text color='action' weight='medium' size='s'>
                                {t('Открыть счет')}
                                <Icon
                                    icon='arrow-right-accent'
                                    widthAndHeight={24}
                                />
                            </Text>
                        </Link>
                    </Card>
                </Columns>
            </div>
        </>
    );
}
