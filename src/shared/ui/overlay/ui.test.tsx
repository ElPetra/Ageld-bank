import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Overlay } from './ui';

describe('Overlay ui', () => {
    test('match snapshot', () => {
        const { asFragment } = render(
            <Overlay visible={true}>Overlay</Overlay>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test('Overlay renders children', () => {
        render(<Overlay visible={true}>Overlay</Overlay>);
        const modalContent = screen.getByText('Overlay');
        expect(modalContent).toBeInTheDocument();
    });
    test('should apply "visible" class when prop true', () => {
        render(<Overlay visible={true}>Overlay</Overlay>);
        const overlay = screen.getByText('Overlay').closest('div');
        expect(overlay).toHaveClass('overlay__modal__content');
    });
    test('should not apply "visible" class when prop false', () => {
        render(<Overlay visible={false}>Overlay</Overlay>);
        const overlay = screen.getByText('Overlay').closest('div');
        expect(overlay).not.toHaveClass('visible');
    });
});
