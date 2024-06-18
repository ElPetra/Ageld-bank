import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Columns } from './ui';

describe('Columns ui', () => {
    test('match snapshot', () => {
        render(<Columns>Columns</Columns>);
        const columns = screen.getByText('Columns');
        expect(columns).toMatchSnapshot();
    });

    test('columns renders', () => {
        render(<Columns>Columns</Columns>);
        const columns = screen.getByText('Columns');
        expect(columns).toBeInTheDocument();
    });
});
