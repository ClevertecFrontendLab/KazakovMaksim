import { HStack, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ProfileNotificationItemProps {
    likes: number;
    Icon: ReactNode;
    likesSize?: number;
    padding?: string;
}

export const ProfileNotificationItem: FC<ProfileNotificationItemProps> = ({
    likes,
    Icon,
    likesSize = 16,
    padding = '8px 16px',
}) => (
    <HStack padding={{ sm: '4px 8px', lg: padding }} gap='6px'>
        {Icon}
        <Text
            fontWeight='600'
            lineHeight={{ sm: '1.33', lg: '1.5' }}
            color='lime.600'
            fontSize={{ sm: '12px', lg: `${likesSize}px` }}
        >
            {likes}
        </Text>
    </HStack>
);
