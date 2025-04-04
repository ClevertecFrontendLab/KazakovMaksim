import { Icon, useBreakpointValue } from '@chakra-ui/react';

import { profileIconsSizes } from '~/constants/iconSizes';

export const EmojiHeartIcon = () => {
    const size = useBreakpointValue(profileIconsSizes);

    return (
        <Icon
            width={`${size}px`}
            height={`${size}px`}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z'
                fill='black'
            />
            <path
                d='M11.315 10.0138C11.41 9.99146 11.5094 9.99735 11.601 10.0308C11.6926 10.0642 11.7724 10.1237 11.8307 10.2019C11.8889 10.2801 11.923 10.3737 11.9288 10.471C11.9345 10.5684 11.9117 10.6653 11.863 10.7498C11.4682 11.4342 10.9 12.0024 10.2157 12.3974C9.53141 12.7924 8.75515 13.0002 7.96505 12.9998C7.17494 13.0002 6.39868 12.7924 5.71439 12.3974C5.0301 12.0024 4.46192 11.4342 4.06705 10.7498C4.01842 10.6653 3.99558 10.5684 4.00133 10.471C4.00708 10.3737 4.04118 10.2801 4.09942 10.2019C4.15766 10.1237 4.2375 10.0642 4.32912 10.0308C4.42073 9.99735 4.52012 9.99146 4.61505 10.0138H4.62005L4.63705 10.0188L4.70405 10.0338L4.95605 10.0888C5.17105 10.1348 5.47105 10.1968 5.81305 10.2578C6.50605 10.3818 7.33505 10.4998 7.96505 10.4998C8.59505 10.4998 9.42505 10.3818 10.117 10.2578C10.4883 10.191 10.858 10.1163 11.226 10.0338L11.293 10.0188L11.31 10.0148L11.315 10.0128V10.0138ZM4.75605 4.56581C5.51905 3.14181 8.77605 4.44581 5.70805 7.99981C1.21205 6.40381 3.35805 3.70181 4.75605 4.56581ZM11.244 4.56581C12.642 3.70181 14.788 6.40381 10.292 7.99981C7.22505 4.44581 10.482 3.14181 11.244 4.56581Z'
                fill='black'
            />
        </Icon>
    );
};
