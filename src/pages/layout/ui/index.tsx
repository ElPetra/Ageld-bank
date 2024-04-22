import { Outlet } from 'react-router';

import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';
import { CustomToaster } from 'src/widgets/toaster';

import './styles.scss';

export function Layout() {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
            <CustomToaster />
        </>
    );
}
