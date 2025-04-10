import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyles = {
    fontSize: 'sm',
    lineHeight: 1.43,
};

const avatarEmailText = defineStyle({
    ...baseStyles,
    color: 'blackAlpha.700',
});

const avatarNameText = defineStyle({
    fontSize: 'lg',
    lineHeight: 1.56,
    fontWeight: 500,
    whiteSpace: 'nowrap',
});

const cardText = defineStyle(baseStyles);

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
