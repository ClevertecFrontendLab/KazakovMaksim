import { useBreakpointValue, useMediaQuery, VStack } from '@chakra-ui/react';

import { AsideFooter } from '~/components/LeftAside/AsideFooter/AsideFooter';
import { Menu } from '~/components/Menu';

export const LeftAside = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });
    const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)');

    if (isTablet) return null;

    return (
        <VStack
            left={isLargerThan1920 ? 'calc((100vw - 1920px)/2)' : '0'}
            top='80px'
            pos='fixed'
            as='aside'
            zIndex='sticky'
            display={{ sm: 'none', md: 'flex' }}
            w='100%'
            maxW='256px'
            h='calc(100vh - 80px)'
            paddingTop='24px'
            paddingBottom='32px'
            gap='0'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);'
        >
            <Menu />
            <AsideFooter />
        </VStack>
    );
};
