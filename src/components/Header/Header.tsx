import { HStack, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import { CardAvatar } from '~/components/CardAvatar';
import { Breadcrumbs } from '~/components/Header/Breadcrumbs';
import { Burger } from '~/components/Header/Burger';
import { PotIcon, YeeDaaIcon } from '~/components/icons';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { mockProfileNotifications, mockUsers } from '~/constants/mockData';
import { ROUTE_CONSTANTS } from '~/constants/routes';

export const Header = () => {
    const isTablet = useBreakpointValue({
        base: true,
        sm: true,
        lg: false,
    });

    return (
        <HStack
            data-test-id='header'
            pos='fixed'
            maxW='1920px'
            w='100%'
            width='100%'
            left='50%'
            transform='translateX(-50%)'
            zIndex='sticky'
            as='header'
            spacing='53px'
            bg='lime.50'
            padding={{ sm: '8px 16px', '2sm': '8px 20px', lg: '16px' }}
        >
            <ChakraLink maxW='210px' w='100%' as={ReactRouterLink} to={ROUTE_CONSTANTS.APP}>
                <HStack>
                    <PotIcon />
                    <YeeDaaIcon />
                </HStack>
            </ChakraLink>
            {!isTablet && <Breadcrumbs breadcrumbs={['Главная']} />}
            {!isTablet && <CardAvatar user={mockUsers[2]} />}
            {isTablet && (
                <HStack ml='auto' spacing={{ sm: '8px', '2sm': '16px' }}>
                    <ProfileNotifications profileNotifications={mockProfileNotifications} />
                    <Burger />
                </HStack>
            )}
        </HStack>
    );
};
