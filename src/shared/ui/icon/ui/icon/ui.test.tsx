import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Icon } from './ui';

describe('Icon ui', () => {
    test('match snapshot', () => {
        render(<Icon icon='action-add-card' shouldExistTestId />);
        const icon = screen.getByTestId('action-add-card');
        expect(icon).toMatchSnapshot();
    });

    test('Icon renders', () => {
        render(<Icon icon='action-add-card' shouldExistTestId />);
        const icon = screen.getByTestId('action-add-card');
        expect(icon).toBeInTheDocument();
    });
});
