import { HStack, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarkHeartIcon, EmojiHeartIcon, PeopleIcon } from '~/components/icons';
import { ProfileNotificationsI } from '~/types';

import { ProfileNotificationItem } from './ProfileNotificationItem/ProfileNotificationItem';

export interface ProfileNotificationsProps {
    profileNotifications: ProfileNotificationsI;
    stack?: 'v' | 'h';
    iconSize?: 'sm' | 'md';
}

export const ProfileNotifications: FC<ProfileNotificationsProps> = ({
    stack = 'h',
    profileNotifications = {},
    iconSize = 'sm',
}) => {
    const Tag = stack === 'v' ? VStack : HStack;

    return (
        <Tag spacing={{ sm: '0', lg: stack === 'v' ? '6' : '2' }}>
            {profileNotifications.bookmarkHeart && (
                <ProfileNotificationItem
                    likes={profileNotifications.bookmarkHeart}
                    Icon={<BookmarkHeartIcon externalSize={iconSize === 'sm' ? 12 : 16} />}
                    padding={iconSize === 'sm' ? '4px 4px' : '8px 16px'}
                    likesSize={iconSize === 'sm' ? 12 : 16}
                />
            )}
            {profileNotifications.people && (
                <ProfileNotificationItem
                    likes={profileNotifications.people}
                    Icon={<PeopleIcon externalSize={iconSize === 'sm' ? 12 : 16} />}
                    padding={iconSize === 'sm' ? '4px 4px' : '8px 16px'}
                    likesSize={iconSize === 'sm' ? 12 : 16}
                />
            )}
            {profileNotifications.emojiHeart && (
                <ProfileNotificationItem
                    likes={profileNotifications.emojiHeart}
                    Icon={<EmojiHeartIcon externalSize={iconSize === 'sm' ? 12 : 16} />}
                    padding={iconSize === 'sm' ? '4px 4px' : '8px 16px'}
                    likesSize={iconSize === 'sm' ? 12 : 16}
                />
            )}
        </Tag>
    );
};
