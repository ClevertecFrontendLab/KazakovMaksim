import { useBreakpointValue, VStack } from '@chakra-ui/react';

import { WriteRecipeIcon } from '~/components/icons';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { RoundButton } from '~/components/RoundButton';
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
            justifyContent='space-between'
        >
            <ProfileNotifications
                profileNotifications={mockProfileNotifications}
                stack='v'
                iconSize='md'
            />
            <RoundButton
                isAsideBtn
                gap='3'
                buttonText='Записать рецепт'
                bg
                Image={<WriteRecipeIcon />}
            />
        </VStack>
    );
};
