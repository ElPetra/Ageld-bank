import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';

import './styles.scss';

const exchangeRates = {
    USD: '91.34 / 98.21',
    EUR: '102.34 / 110.21',
    CNY: '12.03 / 15.12'
};

export function InfoMain() {
    const { t } = useTranslation();
    return (
        <div className='main-menu_aside'>
            <div>
                <Text size='m' weight='bold'>
                    {t('Курсы валют:')}
                </Text>
                <Card
                    className='main-menu_card'
                    direction='column'
                    gap='extra-small'
                    padding='small'
                    borderRadius='large'
                >
                    <Text
                        tag='span'
                        weight='medium'
                        size='s'
                    >{`USD: ${exchangeRates.USD}`}</Text>
                    <Text
                        tag='span'
                        weight='medium'
                        size='s'
                    >{`EUR: ${exchangeRates.EUR}`}</Text>
                    <Text
                        tag='span'
                        weight='medium'
                        size='s'
                    >{`CNY: ${exchangeRates.CNY}`}</Text>
                    <Link to='/'>
                        <Text
                            tag='span'
                            color='action'
                            weight='medium'
                            size='s'
                        >
                            {t('Больше валют ')}
                            <Icon
                                icon='arrow-right-accent'
                                color='action'
                                widthAndHeight={24}
                            />
                        </Text>
                    </Link>
                </Card>
            </div>
            <div>
                <Text size='m' weight='bold'>
                    {t('О банке:')}
                </Text>
                <Card
                    className='main-menu_card'
                    padding='small'
                    borderRadius='large'
                    gap='extra-small'
                >
                    <Text tag='span' weight='bold' size='s'>
                        {t('Первый в рейтинге')}
                    </Text>
                    <Link to='/'>
                        <Text tag='span' weight='bold' size='s' color='action'>
                            Супербанки.ру
                        </Text>
                    </Link>
                </Card>
                <Card
                    className='main-menu_card'
                    padding='small'
                    gap='extra-small'
                    borderRadius='large'
                >
                    <Text weight='bold' size='s'>
                        {t('Самые')}
                    </Text>
                    <Link to='/'>
                        <Text weight='bold' size='s' color='action'>
                            {t('доходные')}
                        </Text>
                    </Link>
                    <Text weight='bold' size='s'>
                        {t('депозиты')}
                    </Text>
                </Card>
            </div>
        </div>
    );
}
