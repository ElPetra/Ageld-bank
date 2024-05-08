import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text } from './ui';

describe('Text ui', () => {
    test('text renders', () => {
        render(<Text>Text</Text>);
        const text = screen.getByText('Text');
        expect(text).toBeInTheDocument();
    });
});
