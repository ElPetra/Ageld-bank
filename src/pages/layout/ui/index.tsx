import { Outlet } from 'react-router';

import { Header } from 'src/widgets/header';
import { Footer } from 'src/widgets/footer';
import { Container } from 'src/shared/ui';

export function Layout() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
