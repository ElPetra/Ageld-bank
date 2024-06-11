import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Text } from './ui';

describe('Text ui', () => {
    test('match snapshot', () => {
        render(<Text>Text</Text>);
        const text = screen.getByText('Text');
        expect(text).toMatchSnapshot();
    });

    test('text renders', () => {
        render(<Text>Text</Text>);
        const text = screen.getByText('Text');
        expect(text).toBeInTheDocument();
    });
});
