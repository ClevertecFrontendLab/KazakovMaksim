import { Center, HStack, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { LeftAside } from '~/components/LeftAside';
import { RightAside } from '~/components/RightAside';

export const Layout = () => {
    const isFooterActive = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    return (
        <>
            <Header />
            <HStack
                as='main'
                justifyContent='space-between'
                alignItems='flex-start'
                gap='0'
                m='0 auto'
                pb={{ base: '100px', lg: '100px', xl: '0' }}
            >
                <LeftAside />
                <Suspense
                    fallback={
                        <Center flexGrow='1'>
                            <Spinner
                                size='xl'
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='lime.50'
                                color='lime.150'
                            />
                        </Center>
                    }
                >
                    <Outlet />
                </Suspense>
                <RightAside />
            </HStack>
            {isFooterActive && <Footer />}
        </>
    );
};
