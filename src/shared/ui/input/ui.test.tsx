import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from './ui';

describe('Input ui', () => {
    test('match snapshot', () => {
        render(<Input placeholder='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toMatchSnapshot();
    });

    test('label renders', () => {
        render(
            <Input
                placeholder='Input'
                size='large'
                value='value'
                onChange={() => {}}
            />
        );
        const input = screen.getByText('Input');
        expect(input).toBeInTheDocument();
    });

    test('label dont renders', () => {
        render(<Input placeholder='Input' />);
        const input = screen.queryByText('Input');
        expect(input).not.toBeInTheDocument();
    });

    test('error renders', () => {
        render(<Input error='Error' />);
        const input = screen.getByText('Error');
        expect(input).toBeInTheDocument();
    });

    test('error dont renders', () => {
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
        render(<Input onChange={onChangeMock} placeholder='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Input1' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    test('onChange have not been called', () => {
        const onChangeMock = jest.fn();
        render(
            <Input
                onChange={onChangeMock}
                placeholder='Input'
                disabled={true}
            />
        );
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.change(input);
        expect(onChangeMock).toHaveBeenCalledTimes(0);
    });

    test('onBlur have been called', () => {
        const onBlurMock = jest.fn();
        render(<Input onBlur={onBlurMock} placeholder='Input' />);
        const input = screen.getByPlaceholderText('Input');
        expect(input).toBeInTheDocument();
        fireEvent.blur(input);
        expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
});
