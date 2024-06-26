import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Card, Text } from 'src/shared/ui';

import { contactsMatcher, corporate, individuals, support } from '../../model';
import './styles.scss';

export const Contacts = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Text weight='bold' size='m'>
                {t('Контакты')}
            </Text>
            <Card
                borderRadius='extra-large'
                gap='large'
                padding='large'
                direction='column'
            >
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {t('Горячая линия для частных лиц')}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {(
                            Object.keys(individuals) as Array<
                                keyof typeof individuals
                            >
                        ).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        individuals[el]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>
                                        {individuals[el]}
                                    </Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {t(contactsMatcher[el])}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {t('Горячая линия корпоративным клиентам')}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {(
                            Object.keys(corporate) as Array<
                                keyof typeof corporate
                            >
                        ).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        corporate[el]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>{corporate[el]}</Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {t(contactsMatcher[el])}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {t('Техническая поддержка')}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {(
                            Object.keys(support) as Array<keyof typeof support>
                        ).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        support[el]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>{support[el]}</Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {t(contactsMatcher[el])}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
};
