import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => (
    <main>
        <Suspense fallback={<Spinner />}>
            <Outlet />
        </Suspense>
    </main>
);
