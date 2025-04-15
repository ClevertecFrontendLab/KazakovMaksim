import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyles = {
    fontFamily: 'main',
    fontSize: '5xl',
    lineHeight: 1,
};

const cardTitleBaseStyles = {
    ...baseStyles,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 500,
};

const mainTitle = defineStyle({
    ...baseStyles,
    fontSize: ['2xl', null, null, null, '3xl', '5xl', '5xl'],
    lineHeight: [1.33, null, null, null, 1],
});

const blogTitle = defineStyle({
    fontFamily: 'main',
    fontWeight: ['500', null, null, null, null, '500', '400'],
    fontSize: ['2xl', null, null, null, '2xl', '3xl', '4xl'],
    lineHeight: [1.33, null, null, null, 1.33, 1.2, 1.1],
    mb: ['3', null, null, null, null, '5', '8'],
});

const sectionTitle = defineStyle({
    ...baseStyles,
    fontSize: ['2xl', null, null, null, '3xl', '4xl', '5xl'],
    lineHeight: [1.33, null, null, null, null, 1.1, 1],
    fontWeight: 500,
});

const cardTitle = defineStyle({
    ...cardTitleBaseStyles,
    fontSize: [null, null, null, null, '16px', '18px', '20px'],
    fontWeight: 500,
    lineHeight: [null, null, null, null, 1.5, 1.56, 1.4],
});

const hCardTitle = defineStyle({
    ...cardTitleBaseStyles,
    fontSize: [null, null, null, null, '16px', '20px'],
    lineHeight: [null, null, null, null, 1.5, 1.4],
});

export const headingTheme = defineStyleConfig({
    variants: {
        mainTitle,
        sectionTitle,
        cardTitle,
        hCardTitle,
        blogTitle,
    },
});
