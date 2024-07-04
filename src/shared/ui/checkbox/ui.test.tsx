import { render, renderHook, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { useForm } from 'react-hook-form';

import { Checkbox } from './ui';

describe('Checkbox ui', () => {
    test('match snapshot', () => {
        const { result } = renderHook(() => useForm());
        const { register } = result.current;
        render(
            <Checkbox register={register} field='checkbox'>
                <div>Публичного договора</div>
            </Checkbox>
        );
        const checkbox = screen.getByTestId('checkbox');
        expect(checkbox).toMatchSnapshot();
    });

    test('Checkbox renders', () => {
        const { result } = renderHook(() => useForm());
        const { register } = result.current;
        render(
            <Checkbox register={register} field='checkbox'>
                <div>Публичного договора</div>
            </Checkbox>
        );
        const checkbox = screen.getByTestId('checkbox');
        expect(checkbox).toBeInTheDocument();
    });
});
