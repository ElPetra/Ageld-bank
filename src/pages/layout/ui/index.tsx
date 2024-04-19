import { Outlet } from 'react-router';

import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';

import './styles.scss';

export function Layout() {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
