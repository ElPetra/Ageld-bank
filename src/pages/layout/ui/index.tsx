import { Outlet } from 'react-router';

import type { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
}
const LayoutHeader = ({ children }: Props) => <header>{children}</header>;
const LayoutFooter = ({ children }: Props) => <footer>{children}</footer>;

export function Layout() {
    return <Outlet />;
}

Layout.Header = LayoutHeader;
Layout.Footer = LayoutFooter;
