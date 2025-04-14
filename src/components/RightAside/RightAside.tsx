import { useBreakpointValue, useMediaQuery, VStack } from '@chakra-ui/react';

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
    const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)');

    if (isTablet) return null;

    return (
        <VStack
            top='80px'
            zIndex='sticky'
            left={isLargerThan1920 ? 'calc((100vw - 1920px)/2 + 256px + 41px + 1360px)' : 'initial'}
            right={!isLargerThan1920 ? '0' : 'initial'}
            pos='fixed'
            as='aside'
            h='calc(100vh - 80px)'
            paddingTop='16px'
            w='100%'
            maxW='256px'
            justifyContent='space-between'
            paddingLeft='56px'
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
