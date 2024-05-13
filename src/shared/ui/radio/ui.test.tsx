import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Radio } from './ui';

describe('Radio ui', () => {
    test('match snapshot', () => {
        const registerMock = jest.fn();
        render(
            <Radio register={registerMock} field='field'>
                Radio
            </Radio>
        );
        const radio = screen.getByTestId('radio');
        expect(radio).toMatchSnapshot();
    });

    test('radio renders', () => {
        const registerMock = jest.fn();
        render(
            <Radio register={registerMock} field='field'>
                Radio
            </Radio>
        );
        const radio = screen.getByTestId('radio');
        expect(radio).toBeInTheDocument();
    });
});
