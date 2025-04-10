import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyles = {
    fontFamily: 'main',
    fontSize: '5xl',
    lineHeight: 1,
};

const mainTitle = defineStyle(baseStyles);

const sectionTitle = defineStyle({
    ...baseStyles,
    fontWeight: 500,
});

const cardTitle = defineStyle({
    ...baseStyles,
    fontSize: 'xl',
    fontWeight: 500,
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export const headingTheme = defineStyleConfig({
    variants: {
        mainTitle,
        sectionTitle,
        cardTitle,
    },
});
