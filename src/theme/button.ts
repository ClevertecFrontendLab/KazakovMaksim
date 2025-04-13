import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const blogButton = defineStyle({
    top: '6',
    right: '6',
    margin: ['12px auto 0', null, null, null, '12px auto 0', 'initial'],
    padding: ['8px 16px', null, null, null, null, '8px 16px', '10px 24px'],
    lineHeight: [1.5, null, null, null, null, 1.5, 1.56],
    fontSize: ['16px', null, null, null, null, '16px', '18px'],
    display: 'flex',
    h: 'initial',
    bg: 'transparent',
});

export const buttonTheme = defineStyleConfig({
    variants: {
        blogButton,
    },
});
