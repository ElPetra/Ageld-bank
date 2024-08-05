import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Input } from './ui';

describe('Input ui', () => {
    test('match snapshot', () => {
        render(<Input label='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toMatchSnapshot();
    });

    test('label renders', () => {
        render(
            <Input
                label='Input'
                size='large'
                value='value'
                onChange={() => {}}
            />
        );
        const input = screen.getByText('Input');
        expect(input).toBeInTheDocument();
    });

    test('label dont renders', () => {
        render(<Input label='Input' />);
        const input = screen.queryByText('Input');
        expect(input).not.toBeInTheDocument();
    });

    test('error renders', () => {
        render(<Input error='Error' />);
        const input = screen.getByText('Error');
        expect(input).toBeInTheDocument();
    });

    test('error dont renders for small inputs', () => {
        render(<Input error='Error' size='small' />);
        const input = screen.queryByText('Error');
        expect(input).not.toBeInTheDocument();
    });

    test('children renders', () => {
        render(<Input>Children</Input>);
        const input = screen.getByText('Children');
        expect(input).toBeInTheDocument();
    });

    test('onChange have been called', () => {
        const onChangeMock = jest.fn();
        render(<Input onChange={onChangeMock} label='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Input1' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    test('onChange have not been called', () => {
        const onChangeMock = jest.fn();
        render(<Input onChange={onChangeMock} label='Input' disabled />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.change(input);
        expect(onChangeMock).toHaveBeenCalledTimes(0);
    });

    test('onBlur have been called', () => {
        const onBlurMock = jest.fn();
        render(<Input onBlur={onBlurMock} label='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.blur(input);
        expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
});
