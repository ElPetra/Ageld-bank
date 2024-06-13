import { Link } from 'react-router-dom';

import { Text, Card } from 'src/shared/ui';

import { corporate, individuals, support, contactsMatcher } from '../../model';

import './styles.scss';

export const Contacts = () => {
    return (
        <div>
            <Text weight='bold' size='m'>
                {'Контакты'}
            </Text>
            <Card
                borderRadius='extra-large'
                gap='large'
                padding='large'
                direction='column'
            >
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {'Горячая линия для частных лиц'}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {Object.keys(individuals).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        individuals[
                                            el as keyof typeof individuals
                                        ]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>
                                        {
                                            individuals[
                                                el as keyof typeof individuals
                                            ]
                                        }
                                    </Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {
                                        contactsMatcher[
                                            el as keyof typeof individuals
                                        ]
                                    }
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {'Горячая линия корпоративным клиентам'}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {Object.keys(corporate).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        corporate[el as keyof typeof corporate]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>
                                        {
                                            corporate[
                                                el as keyof typeof corporate
                                            ]
                                        }
                                    </Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {
                                        contactsMatcher[
                                            el as keyof typeof corporate
                                        ]
                                    }
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='contacts-page__contacts-block'>
                    <Text weight='medium' size='m'>
                        {'Техническая поддержка'}
                    </Text>
                    <div className='contacts-page__contacts-block__contacts'>
                        {Object.keys(support).map(el => (
                            <div key={el}>
                                <Link
                                    to={
                                        (el !== 'email' ? 'tel:' : 'mailto:') +
                                        support[el as keyof typeof support]
                                    }
                                    target='_blank'
                                >
                                    <Text weight='medium'>
                                        {support[el as keyof typeof support]}
                                    </Text>
                                </Link>
                                <Text weight='medium' color='tertiary'>
                                    {
                                        contactsMatcher[
                                            el as keyof typeof support
                                        ]
                                    }
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
};
