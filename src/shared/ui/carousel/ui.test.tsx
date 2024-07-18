import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

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
