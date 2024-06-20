import { Carousel } from 'src/shared/ui/carousel';
import { GalleryCard } from 'src/shared/ui/carousel/ui/carousel-galery/galery-card';

const mainMenuContent: Array<JSX.Element> = [
    <GalleryCard
        key={0}
        title={'Депозит Premium'}
        content={
            'Можем закрыть в любой момент времени, без перерасчета % Возможность частичного снятия Возможность пополнения\nСрок от 180 дней и выше'
        }
        button={'Открыть депозит'}
    />,
    <GalleryCard
        key={1}
        title={'Кредитная карта'}
        content={
            'Целый год без %\nБесплатное обслуживание и кэшбэк за все покупки'
        }
        button={'Получить карту'}
    />,
    <GalleryCard
        key={2}
        title={'Кэшбэк на любые покупки'}
        content={
            'Каждый месяц выбирайте 4 категории с кэшбэком 5%. Товары для дома, цветы, такси Вам решать, на что тратить чаще в этом месяце, чтобы получить максимум выгоды'
        }
        button={'Хочу кэшбек!'}
    />
];

export function CarouselMain() {
    return <Carousel cards={mainMenuContent} />;
}
