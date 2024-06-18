import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Container } from './ui';

describe('Container ui', () => {
    test('match snapshot', () => {
        render(<Container>Container</Container>);
        const container = screen.getByText('Container');
        expect(container).toMatchSnapshot();
    });

    test('container renders', () => {
        render(<Container>Container</Container>);
        const container = screen.getByText('Container');
        expect(container).toBeInTheDocument();
    });
});
