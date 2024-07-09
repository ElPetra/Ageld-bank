import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { Preloader } from './ui';

describe('Preloader ui', () => {
    test('match snapshot', () => {
        render(<Preloader />);
        const preloader = screen.getByTestId('preloader');
        expect(preloader).toMatchSnapshot();
    });

    test('Preloader renders', () => {
        render(<Preloader />);
        const preloader = screen.getByTestId('preloader');
        expect(preloader).toBeInTheDocument();
    });
});
