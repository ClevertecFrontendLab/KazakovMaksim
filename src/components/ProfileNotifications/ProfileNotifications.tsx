import { HStack, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarkHeartIcon, EmojiHeartIcon, PeopleIcon } from '~/components/icons';

import { ProfileNotificationItem } from './ProfileNotificationItem/ProfileNotificationItem';

export interface ProfileNotificationsProps {
    stack?: string;
}

export const ProfileNotifications: FC<ProfileNotificationsProps> = ({ stack = 'v' }) => {
    const Tag = stack === 'v' ? VStack : HStack;

    return (
        <Tag spacing={{ sm: '0', lg: '6' }}>
            <ProfileNotificationItem likes={185} Icon={<BookmarkHeartIcon />} />
            <ProfileNotificationItem likes={589} Icon={<PeopleIcon />} />
            <ProfileNotificationItem likes={587} Icon={<EmojiHeartIcon />} />
        </Tag>
    );
};
