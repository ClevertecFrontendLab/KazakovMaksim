import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const avatarEmailText = defineStyle({
    fontSize: ['xs', null, null, 'xs', null, 'sm'],
    color: 'blackAlpha.700',
    lineHeight: [1.43, null, null, 1.33, null, 1.43],
});

const avatarNameText = defineStyle({
    fontWeight: 500,
    fontSize: ['md', null, null, 'md', null, 'lg'],
    lineHeight: [1.5, null, null, 1.5, null, 1.56],
});

const cardText = defineStyle({
    fontSize: 'sm',
    lineHeight: 1.43,
});

const titleText = defineStyle({
    lineHeight: 1.5,
    fontWeight: 500,
    color: 'blackAlpha.600',
});

export const textTheme = defineStyleConfig({
    variants: {
        avatarEmailText,
        avatarNameText,
        cardText,
        titleText,
    },
});
