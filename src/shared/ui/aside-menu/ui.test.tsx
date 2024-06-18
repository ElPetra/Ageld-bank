import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

import { AsideMenu } from './ui';

describe('AsideMenu ui', () => {
    test('match snapshot', () => {
        render(<AsideMenu visible={true}>AsideMenu</AsideMenu>);
        const asideMenu = screen.getByText('AsideMenu');
        expect(asideMenu).toMatchSnapshot();
    });

    test('asideMenu renders', () => {
        render(<AsideMenu visible={true}>AsideMenu</AsideMenu>);
        const asideMenu = screen.getByText('AsideMenu');
        expect(asideMenu).toBeInTheDocument();
    });
});
