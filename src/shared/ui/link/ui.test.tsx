import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Link } from './ui';

describe('Link ui', () => {
    test('match snapshot', () => {
        render(
            <MemoryRouter>
                <Link to='/'>link</Link>
            </MemoryRouter>
        );
        const link = screen.getByText('link');
        expect(link).toMatchSnapshot();
    });

    test('link renders', () => {
        render(
            <MemoryRouter>
                <Link to='/'>link</Link>
            </MemoryRouter>
        );
        const link = screen.getByText('link');
        expect(link).toBeInTheDocument();
    });
});
