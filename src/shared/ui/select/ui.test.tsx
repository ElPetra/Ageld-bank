import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Select } from './ui';

describe('Select component', () => {
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
    ];

    test('should render label', () => {
        render(<Select options={options} label='Test Label' />);
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    test('should open dropdown on button click', () => {
        render(<Select options={options} label='Test Label' />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByRole('listbox')).toBeVisible();
    });

    test('should close dropdown on option click', () => {
        render(<Select options={options} label='Test Label' />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const option = screen.getByLabelText('Option 1');
        fireEvent.click(option);

        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    test('should display selected value', () => {
        render(
            <Select options={options} label='Test Label' defaultValue='1' />
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const selectedValue = screen.getByText('Option 1');
        expect(selectedValue).toBeInTheDocument();
    });
});
