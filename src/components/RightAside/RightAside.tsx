import { VStack } from '@chakra-ui/react';

import { ProfileNotifications } from '~/components/ProfileNotifications';
import { mockProfileNotifications } from '~/constants/mockData';

export const RightAside = () => (
    <VStack
        h='calc(100vh - 80px)'
        paddingTop='24px'
        paddingBottom='32px'
        w='100%'
        maxW='256px'
        display={{ sm: 'none', lg: 'flex' }}
    >
        <ProfileNotifications
            profileNotifications={mockProfileNotifications}
            stack='v'
            iconSize='md'
        />
    </VStack>
);
