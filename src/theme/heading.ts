import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyles = {
    fontFamily: 'main',
    fontSize: '5xl',
    lineHeight: 1,
};

const mainTitle = defineStyle({
    ...baseStyles,
    fontSize: ['2xl', null, null, '2xl', '5xl'],
    lineHeight: [1.33, null, null, null, 1],
});

const sectionTitle = defineStyle({
    ...baseStyles,
    fontSize: ['2xl', null, null, null, '4xl', '5xl'],
    lineHeight: [1.33, null, null, null, null, 1.1, 1],
    fontWeight: 500,
});

const cardTitle = defineStyle({
    ...baseStyles,
    fontSize: [null, null, null, null, '16px', '18px', '20px'],
    fontWeight: 500,
    lineHeight: [null, null, null, null, 1.5, 1.56, 1.4],
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
