import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Card } from './ui';

describe('Card ui', () => {
    test('match snapshot', () => {
        render(<Card>Card</Card>);
        const card = screen.getByText('Card');
        expect(card).toMatchSnapshot();
    });

    test('card renders', () => {
        render(<Card>Card</Card>);
        const card = screen.getByText('Card');
        expect(card).toBeInTheDocument();
    });
});
