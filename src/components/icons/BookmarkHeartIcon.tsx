import { Icon, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';

import { profileIconsSizes } from '~/constants/iconSizes';
import { NotificationIconProps } from '~/types';

export const BookmarkHeartIcon: FC<NotificationIconProps> = ({ externalSize = 0 }) => {
    const size = useBreakpointValue(profileIconsSizes);

    return (
        <Icon
            width={`${externalSize || size}px`}
            height={`${externalSize || size}px`}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.9998 4.41007C9.3868 2.98507 12.8538 5.48007 7.9998 8.68707C3.1458 5.48007 6.6128 2.98607 7.9998 4.41207V4.41007Z'
                fill='black'
            />
            <path
                d='M2 2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V15.5C14 15.5904 13.9754 15.6792 13.9289 15.7568C13.8824 15.8343 13.8157 15.8979 13.736 15.9405C13.6563 15.9832 13.5664 16.0035 13.4761 15.9992C13.3858 15.9948 13.2983 15.9661 13.223 15.916L8 13.101L2.777 15.916C2.70171 15.9661 2.61423 15.9948 2.52389 15.9992C2.43355 16.0035 2.34373 15.9832 2.264 15.9405C2.18427 15.8979 2.1176 15.8343 2.07111 15.7568C2.02462 15.6792 2.00005 15.5904 2 15.5V2ZM4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14.566L7.723 12.084C7.80506 12.0294 7.90143 12.0003 8 12.0003C8.09857 12.0003 8.19494 12.0294 8.277 12.084L13 14.566V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H4Z'
                fill='black'
            />
        </Icon>
    );
};
