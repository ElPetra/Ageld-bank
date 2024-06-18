import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Form } from './ui';

describe('Form ui', () => {
    test('match snapshot', () => {
        render(<Form>Form</Form>);
        const form = screen.getByText('Form');
        expect(form).toMatchSnapshot();
    });

    test('form renders', () => {
        render(<Form>Form</Form>);
        const form = screen.getByText('Form');
        expect(form).toBeInTheDocument();
    });

    test('error renders', () => {
        render(<Form error='Error'>Form</Form>);
        const form = screen.getByText('Error');
        expect(form).toBeInTheDocument();
    });
});
