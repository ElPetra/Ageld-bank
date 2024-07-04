import { render, renderHook, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { useForm } from 'react-hook-form';

import { Switcher } from './ui';

describe('Switcher ui', () => {
    test('match snapshot', () => {
        const { result } = renderHook(() => useForm());
        const { register } = result.current;
        render(
            <Switcher
                register={register}
                field='withReplenishment'
                id='withReplenishment'
            >
                С пополнением
            </Switcher>
        );
        const switcher = screen.getByText('С пополнением');
        expect(switcher).toMatchSnapshot();
    });

    test('Switcher renders', () => {
        const { result } = renderHook(() => useForm());
        const { register } = result.current;
        render(
            <Switcher
                register={register}
                field='withReplenishment'
                id='withReplenishment'
            >
                С пополнением
            </Switcher>
        );
        const switcher = screen.getByText('С пополнением');
        expect(switcher).toBeInTheDocument();
    });
});
