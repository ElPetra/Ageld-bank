import { render, screen, renderHook } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Carousel } from './ui';
import { useCarousel } from './lib';

describe('Carousel ui', () => {
    test('match snapshot', () => {
        render(
            <Carousel
                cards={[
                    <div key={1}>Карточка 1</div>,
                    <div key={2}>Карточка 2</div>,
                    <div key={3}>Карточка 3</div>,
                    <div key={4}>Карточка 4</div>,
                    <div key={5}>Карточка 5</div>
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
                    <div key={1}>Карточка 1</div>,
                    <div key={2}>Карточка 2</div>,
                    <div key={3}>Карточка 3</div>,
                    <div key={4}>Карточка 4</div>,
                    <div key={5}>Карточка 5</div>
                ]}
            />
        );
        const carousel = screen.getByTestId('carousel');
        expect(carousel).toBeInTheDocument();
    });
});

describe('calculate the rotation angle and distance from the center', () => {
    it('should calculate correct angle and distance for correct length', () => {
        const length = 4;
        const { result } = renderHook(() => useCarousel(length));
        const { angle, distance } = result.current;
        const edge = 500 / Math.sin((180 / length) * (Math.PI / 180)) / 2;
        const height = Math.sqrt(4 * edge ** 2 - 500 ** 2) / 2;
        expect(angle).toBe(90);
        expect(distance).toBe(height);
    });
});
