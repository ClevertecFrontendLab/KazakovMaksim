import { HStack, Link as ChakraLink, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import avatarImg from '~/assets/img/avatar.jpg';
import { CardAvatar } from '~/components/CardAvatar';
import { Burger } from '~/components/Header/Burger';
import { PotIcon, YeeDaaIcon } from '~/components/icons';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { mockProfileNotifications } from '~/constants/mockData';
import { ROUTE_CONSTANTS } from '~/constants/routes';
import { User } from '~/types';

const mockUser: User = {
    name: 'Екатерина',
    surname: 'Константинопольская',
    nickname: '@bake_and_pie',
    imgSrc: avatarImg,
};

export const Header = () => {
    const isTablet = useBreakpointValue({
        base: true,
        sm: true,
        lg: false,
    });

    return (
        <HStack
            as='header'
            spacing='53px'
            bg='lime.50'
            padding={{ sm: '8px 16px', '2sm': '8px 20px', lg: '16px' }}
        >
            <ChakraLink as={ReactRouterLink} to={ROUTE_CONSTANTS.APP}>
                <HStack maxW='210px' w='100%'>
                    <PotIcon />
                    <YeeDaaIcon />
                </HStack>
            </ChakraLink>
            {!isTablet && (
                <Text maxW='1152px' w='100%' color='blackAlpha.700'>
                    Главная
                </Text>
            )}
            {!isTablet && <CardAvatar user={mockUser} />}
            {isTablet && (
                <HStack ml='auto' spacing={{ sm: '8px', '2sm': '16px' }}>
                    <ProfileNotifications profileNotifications={mockProfileNotifications} />
                    <Burger />
                </HStack>
            )}
        </HStack>
    );
};
