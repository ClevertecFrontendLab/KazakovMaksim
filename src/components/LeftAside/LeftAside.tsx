import { useBreakpointValue, VStack } from '@chakra-ui/react';

import { AsideFooter } from '~/components/LeftAside/AsideFooter/AsideFooter';
import { Menu } from '~/components/Menu';

export const LeftAside = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    if (isTablet) return null;

    return (
        <VStack
            as='aside'
            display={{ sm: 'none', md: 'flex' }}
            w='100%'
            maxW='256px'
            h='calc(100vh - 80px)'
            paddingTop='24px'
            paddingBottom='32px'
            gap='0'
            flexShrink='0'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);'
        >
            <Menu />
            <AsideFooter />
        </VStack>
    );
};
