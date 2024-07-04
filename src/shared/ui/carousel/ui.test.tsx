import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { MainCarouselCard } from 'src/widgets/main-menu/ui/carousel/carousel-card';

import { Carousel } from './ui';

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {})
            }
        };
    }
}));

describe('Carousel ui', () => {
    test('match snapshot', () => {
        render(
            <Carousel
                cards={[
                    <MainCarouselCard
                        key={0}
                        title={'Депозит Premium'}
                        content={
                            'Можем закрыть в любой момент времени, без перерасчета % Возможность частичного снятия Возможность пополнения\nСрок от 180 дней и выше'
                        }
                        button={'Открыть депозит'}
                    />,
                    <MainCarouselCard
                        key={1}
                        title={'Кредитная карта'}
                        content={
                            'Целый год без %\nБесплатное обслуживание и кэшбэк за все покупки'
                        }
                        button={'Получить карту'}
                    />,
                    <MainCarouselCard
                        key={2}
                        title={'Кэшбэк на любые покупки'}
                        content={
                            'Каждый месяц выбирайте 4 категории с кэшбэком 5%. Товары для дома, цветы, такси Вам решать, на что тратить чаще в этом месяце, чтобы получить максимум выгоды'
                        }
                        button={'Хочу кэшбэк!'}
                    />
                ]}
            />
        );
        const carousel = screen.getByTestId('carousel');
        expect(carousel).toMatchSnapshot();
    });

    test('Carousel renders', () => {
        render(
            <Carousel
                cards={[
                    <MainCarouselCard
                        key={0}
                        title={'Депозит Premium'}
                        content={
                            'Можем закрыть в любой момент времени, без перерасчета % Возможность частичного снятия Возможность пополнения\nСрок от 180 дней и выше'
                        }
                        button={'Открыть депозит'}
                    />,
                    <MainCarouselCard
                        key={1}
                        title={'Кредитная карта'}
                        content={
                            'Целый год без %\nБесплатное обслуживание и кэшбэк за все покупки'
                        }
                        button={'Получить карту'}
                    />,
                    <MainCarouselCard
                        key={2}
                        title={'Кэшбэк на любые покупки'}
                        content={
                            'Каждый месяц выбирайте 4 категории с кэшбэком 5%. Товары для дома, цветы, такси Вам решать, на что тратить чаще в этом месяце, чтобы получить максимум выгоды'
                        }
                        button={'Хочу кэшбэк!'}
                    />
                ]}
            />
        );
        const carousel = screen.getByTestId('carousel');
        expect(carousel).toBeInTheDocument();
    });
});
