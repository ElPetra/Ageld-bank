import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Image } from './ui';

describe('Image ui', () => {
    test('match snapshot', () => {
        render(<Image image='classic' shouldExistTestId />);
        const image = screen.getByTestId('classic');
        expect(image).toMatchSnapshot();
    });

    test('Image renders', () => {
        render(<Image image='classic' shouldExistTestId />);
        const image = screen.getByTestId('classic');
        expect(image).toBeInTheDocument();
    });
});
