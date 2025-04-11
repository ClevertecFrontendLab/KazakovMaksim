import { useBreakpointValue, VStack } from '@chakra-ui/react';

import { ProfileNotifications } from '~/components/ProfileNotifications';
import { mockProfileNotifications } from '~/constants/mockData';

export const RightAside = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    if (isTablet) return null;

    return (
        <VStack
            as='aside'
            h='calc(100vh - 80px)'
            paddingTop='24px'
            paddingBottom='32px'
            w='100%'
            maxW='249px'
        >
            <ProfileNotifications
                profileNotifications={mockProfileNotifications}
                stack='v'
                iconSize='md'
            />
        </VStack>
    );
};
