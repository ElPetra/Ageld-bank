import { render, renderHook, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import { useForm } from 'react-hook-form';

import { SliderInput } from './ui';

describe('SliderInput ui', () => {
    test('match snapshot', () => {
        const { result } = renderHook(() => useForm());
        const { register, setValue } = result.current;
        render(
            <SliderInput
                register={register}
                setValue={setValue}
                label='Срок депозита'
                min={1}
                max={36}
                inputField='termInput'
                sliderField='termSlider'
                unit='мес'
                variant='primary'
            />
        );
        const sliderInput = screen.getByTestId('sliderinput');
        expect(sliderInput).toMatchSnapshot();
    });

    test('SliderInput renders', () => {
        const { result } = renderHook(() => useForm());
        const { register, setValue } = result.current;
        render(
            <SliderInput
                register={register}
                setValue={setValue}
                label='Срок депозита'
                min={1}
                max={36}
                inputField='termInput'
                sliderField='termSlider'
                unit='мес'
                variant='primary'
            />
        );
        const sliderInput = screen.getByTestId('sliderinput');
        expect(sliderInput).toBeInTheDocument();
    });
});
