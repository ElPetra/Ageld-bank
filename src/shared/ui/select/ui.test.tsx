import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import userEvent from '@testing-library/user-event';

import { Select } from './ui';

describe('Select ui', () => {
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
    ];

    test('match snapshot', () => {
        const { asFragment } = render(
            <Select options={options} label='Select' />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test('should display the label and default value', () => {
        render(<Select options={options} label='Select' defaultValue='1' />);
        expect(screen.getByText('Select')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
    test('should open dropdown on button click', () => {
        render(<Select options={options} label='Select' />);
        userEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('listbox')).toBeVisible();
    });
    test('should close dropdown when an option is selected', () => {
        render(<Select options={options} label='Select' />);
        userEvent.click(screen.getByRole('button'));
        userEvent.click(screen.getByRole('option', { name: 'Option 1' }));
        expect(screen.queryByRole('listbox')).not.toBeVisible();
    });
    test('should apply error class when error prop is passed', () => {
        render(
            <Select options={options} label='Select' error='This is an error' />
        );
        expect(screen.getByText('This is an error')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveClass('error');
    });
    test('should disable button when disabled prop is true', () => {
        render(<Select options={options} label='Select' />);
        expect(screen.getByRole('button')).toBeDisabled();
    });
    test('should call register function with correct value', () => {
        const registerMock = jest.fn();
        render(
            <Select
                options={options}
                label='Select an option'
                register={registerMock}
                field='testField'
            />
        );
        userEvent.click(screen.getByRole('button'));
        userEvent.click(screen.getByRole('option', { name: 'Option 1' }));
        expect(registerMock).toHaveBeenCalledWith(
            'testField',
            expect.any(Object)
        );
    });
});
