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

const cookButtonBase = {
    h: 'initial',
};

const cookButton = defineStyle({
    ...cookButtonBase,
    padding: ['4px 8px', null, null, null, '4px 8px', '5px 12px'],
    fontSize: ['12px', null, null, null, '12px', '14px'],
    lineHeight: [1.33, null, null, null, 1.33, 1.43],
    bg: 'blackAlpha.900',
    color: 'white',
});

const cookButtonShort = defineStyle({
    ...cookButtonBase,
    padding: ['7px', null, null, null, null, '7px', '5px 11px'],
    fontSize: ['12px', null, null, null, null, '12px', '14px'],
    lineHeight: [1.33, null, null, null, null, 1.33, 1.43],
    bg: 'transparent',
    color: 'lime.600',
    border: '1px',
    borderColor: 'lime.600',
});

export const buttonTheme = defineStyleConfig({
    variants: {
        blogButton,
        cookButton,
        cookButtonShort,
    },
});
