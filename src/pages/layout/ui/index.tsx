import { Outlet } from 'react-router';

import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
