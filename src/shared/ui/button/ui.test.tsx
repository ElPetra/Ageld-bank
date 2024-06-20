import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { Button } from './ui';

describe('Button ui', () => {
    test('match snapshot', () => {
        render(<Button>Button</Button>);
        const button = screen.getByText('Button');
        expect(button).toMatchSnapshot();
    });

    test('link match snapshot', () => {
        render(<Button variant='link'>Link</Button>);
        const link = screen.getByText('Link');
        expect(link).toMatchSnapshot();
    });

    test('button renders', () => {
        render(<Button>Button</Button>);
        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
    });

    test('onClick have been called', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Button</Button>);
        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('onClick have not been called', () => {
        const onClickMock = jest.fn();
        render(
            <Button onClick={onClickMock} disabled>
                Button
            </Button>
        );
        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(0);
    });
});
