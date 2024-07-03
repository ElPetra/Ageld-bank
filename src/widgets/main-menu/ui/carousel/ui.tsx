import { useTranslation } from 'react-i18next';

import { Carousel } from 'src/shared/ui';

import { MainCarouselCard } from './carousel-card';

import './styles.scss';

export function MainCarousel() {
    const { t } = useTranslation();
    return (
        <div className='main-carousel'>
            <Carousel
                cards={[
                    <MainCarouselCard
                        key={0}
                        title={t('Депозит Premium')}
                        content={t(
                            'Можем закрыть в любой момент времени, без перерасчета % Возможность частичного снятия Возможность пополнения\nСрок от 180 дней и выше'
                        )}
                        button={t('Открыть депозит')}
                    />,
                    <MainCarouselCard
                        key={1}
                        title={t('Кредитная карта')}
                        content={t(
                            'Целый год без %\nБесплатное обслуживание и кэшбэк за все покупки'
                        )}
                        button={t('Получить карту')}
                    />,
                    <MainCarouselCard
                        key={2}
                        title={t('Кэшбэк на любые покупки')}
                        content={t(
                            'Каждый месяц выбирайте 4 категории с кэшбэком 5%. Товары для дома, цветы, такси Вам решать, на что тратить чаще в этом месяце, чтобы получить максимум выгоды'
                        )}
                        button={t('Хочу кэшбэк!')}
                    />
                ]}
            />
        </div>
    );
}
