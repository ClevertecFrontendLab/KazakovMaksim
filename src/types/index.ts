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

export interface CategoryItem {
    name: string;
    imgSrc: string;
}

export interface ProductCardProps {
    productTitle: string;
    productDesc: string;
    imgSrc?: string;
    profileNotifications?: ProfileNotificationsI;
    category: CategoryItem;
    withImg?: boolean;
}
