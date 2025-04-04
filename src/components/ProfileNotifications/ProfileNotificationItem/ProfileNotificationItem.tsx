import { HStack, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ProfileNotificationItemProps {
    likes: number;
    Icon: ReactNode;
}

export const ProfileNotificationItem: FC<ProfileNotificationItemProps> = ({ likes, Icon }) => (
    <HStack padding={{ sm: '4px 8px', lg: '8px 16px' }} gap='6px'>
        {Icon}
        <Text
            fontWeight='600'
            lineHeight={{ sm: '1.33', lg: '1.5' }}
            color='lime.600'
            fontSize={{ sm: '12px', lg: '16px' }}
        >
            {likes}
        </Text>
    </HStack>
);
