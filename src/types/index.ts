export interface User {
    name: string;
    surname: string;
    nickname: string;
    imgSrc?: string;
}

export interface NotificationIconProps {
    externalSize?: number;
}

export interface ProfileNotificationsI {
    bookmarkHeart?: number;
    emojiHeart?: number;
    people?: number;
}
